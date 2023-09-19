import { CreateClientsServicesDto } from '../dto/create-clients-services.dto';
import { CreateClientDto } from '../dto/create-clients.dto';
import { UpdateClientDto } from '../dto/update-clients.dto';
import { Clients } from '../entities/clients.entity';

export abstract class ClientsRepository {
  abstract create(body: CreateClientDto): Promise<Clients>;
  abstract update({id, body} : {id: number, body: UpdateClientDto}): Promise<boolean>
  abstract createClientsServices(body: CreateClientsServicesDto): Promise<Clients>
}
