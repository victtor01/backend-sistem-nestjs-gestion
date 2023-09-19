import { CreateClientsAddressDto } from "../dto/create-clients-address.dto";
import { ClientsAddress } from "../entities/clients-address.entity";

export abstract class ClientsAddressRepository {
    abstract create(data: CreateClientsAddressDto): Promise<ClientsAddress>
}