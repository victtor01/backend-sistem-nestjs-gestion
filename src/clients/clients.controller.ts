import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
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

  @Post('create')
  async create(@Body() Body: CreateClientDto): Promise<Clients> {
    return await this.ClientsRepository.create(Body);
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
    return await this.clientsService.createClientsServices(body);
  }
}
