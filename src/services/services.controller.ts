import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Request,
} from '@nestjs/common';
import { ServicesRepository } from './repositories/services-repository';
import { CreateServicesDto } from './dto/create-services';
import { Services } from './entities/services.entity';

@Controller('services')
export class ServicesController {
  constructor(private readonly ServiceRepository: ServicesRepository) {}

  @Get()
  async getAll(@Request() req: any): Promise<Services[]> {
    const { id } = req.user;
    return await this.ServiceRepository.getAll(id);
}

  @Post('create')
  async create(
    @Body() data: CreateServicesDto,
    @Request() req: any,
  ): Promise<Services> {
    data.userId = req.user.id;
    return await this.ServiceRepository.create(data);
  }

  @Delete('delete/:id')
  async delete(@Param('id') id: number): Promise<boolean> {
    return await this.ServiceRepository.delete(Number(id));
  }
}
