import { Injectable } from '@nestjs/common';
import { CreateClientsAddressDto } from './dto/create-clients-address.dto';
import { ClientsAddress } from './entities/clients-address.entity';
import { ClientsAddressRepository } from './repositories/clients-address-repository';

@Injectable()
export class ClientsAddressService {
  constructor(
    private readonly clientsAddressRepository: ClientsAddressRepository,
  ) {}
  async create(data: CreateClientsAddressDto): Promise<ClientsAddress> {
    return await this.clientsAddressRepository.create(data);
  }
}
