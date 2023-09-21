import { CreateClientsCommentsDto } from "../dto/create-clients-comments.dto";
import { ClientsComments } from "../entities/clients-comments.entity";

export abstract class ClientsCommentsRepository {
    abstract create(data: CreateClientsCommentsDto): Promise<ClientsComments>
}