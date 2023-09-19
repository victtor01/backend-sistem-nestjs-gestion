import { Injectable } from '@nestjs/common';
import { CreateClientsServicesDto } from './dto/create-clients-services.dto';
import { Clients } from './entities/clients.entity';
import { ClientsRepository } from './repositories/clients-repository';

@Injectable()
export class ClientsService {
  constructor(private readonly clientsRepository: ClientsRepository) {}

  async createClientsServices(
    data: CreateClientsServicesDto,
  ): Promise<Clients> {
    return await this.clientsRepository.createClientsServices(data);
  }
}
