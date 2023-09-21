import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  Request,
} from '@nestjs/common';
import { Clients } from './entities/clients.entity';
import { ClientsRepository } from './repositories/clients-repository';
import { CreateClientDto } from './dto/create-clients.dto';
import { UpdateClientDto } from './dto/update-clients.dto';
import { ClientsAddressService } from 'src/clients-address/clients-address.service';
import { CreateClientsServicesDto } from './dto/create-clients-services.dto';
import { ClientsService } from './clients.service';

@Controller('clients')
export class ClientsController {
  constructor(
    private readonly ClientsRepository: ClientsRepository,
    private readonly clientsAddressService: ClientsAddressService,
    private readonly clientsService: ClientsService,
  ) {}

  @Get('/:code')
  async findOne(
    @Param('code') code: string,
    @Request() req: any,
  ): Promise<Clients> {
    const userId = Number(req.user.id);
    return await this.ClientsRepository.findOne({ code, userId });
  }

  @Post('create')
  async create(
    @Body() body: CreateClientDto,
    @Request() req: any,
  ): Promise<Clients> {
    body.userId = req.user.id;
    return await this.ClientsRepository.create(body);
  }

  @Put('update/:id')
  async update(
    @Param('id') id: number,
    @Body() body: UpdateClientDto,
  ): Promise<boolean> {
    id = Number(id);
    return await this.ClientsRepository.update({ id, body });
  }

  @Put('/:id/services/associate')
  async servicesCreate(
    @Body() body: CreateClientsServicesDto,
    @Param('id') id: number,
  ): Promise<Clients> {
    body.clientId = Number(id);
    return await this.clientsService.connectClientsServices(body);
  }
}
