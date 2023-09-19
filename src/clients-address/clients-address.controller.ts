import { Body, Controller, Post, Request } from '@nestjs/common';
import { ClientsAddress } from './entities/clients-address.entity';
import { ClientsAddressRepository } from './repositories/clients-address-repository';
import { CreateClientsAddressDto } from './dto/create-clients-address.dto';

@Controller('clients-address')
export class ClientsAddressController {
  constructor(
    private readonly clientsAddressRepository: ClientsAddressRepository,
  ) {}

  @Post('create')
  async create(@Body() body: CreateClientsAddressDto): Promise<ClientsAddress> {
    return await this.clientsAddressRepository.create(body);
  }
}
