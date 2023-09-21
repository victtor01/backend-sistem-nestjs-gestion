import { CreateClientsServicesDto } from '../dto/create-clients-services.dto';
import { CreateClientDto } from '../dto/create-clients.dto';
import { findOneClientsDto } from '../dto/findOne-clients.dto';
import { UpdateClientDto } from '../dto/update-clients.dto';
import { Clients } from '../entities/clients.entity';

export abstract class ClientsRepository {
  abstract findOne({ code, userId }: findOneClientsDto): Promise<Clients>
  abstract create(body: CreateClientDto): Promise<Clients>;
  abstract update({ id, body }: { id: number, body: UpdateClientDto }): Promise<boolean>
  abstract connectClientsServices(body: CreateClientsServicesDto): Promise<Clients>
}
