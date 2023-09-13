import { Body, Controller, Get, Post, Put, Request } from '@nestjs/common';
import { CreateClientsListsDto } from './dto/create-clients-lists.dto';
import { ClientsListsRepository } from './repositories/clients-lists-repository';
import { ClientsLists } from './entities/clients-lists.entity';

@Controller('clients-lists')
export class ClientsListsController {
  constructor(
    private readonly ClientsListsRepository: ClientsListsRepository,
  ) {}

  @Get()
  async getAll(@Request() req): Promise<ClientsLists[]> {
    const { id } = req.user;
    return await this.ClientsListsRepository.getAll(id);
  }

  @Post('create')
  async create(@Body() body: CreateClientsListsDto, @Request() req) {
    body.userId = req.user.id;
    return await this.ClientsListsRepository.create(body);
  }

}
