import { CreateClientsListsDto } from "../dto/create-clients-lists.dto";
import { ClientsLists } from "../entities/clients-lists.entity";

export abstract class ClientsListsRepository {
    abstract getAll(userId: number): Promise<ClientsLists[]>
    abstract create(body: CreateClientsListsDto) : Promise<ClientsLists>
}