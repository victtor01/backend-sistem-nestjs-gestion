import { CreateServicesDto } from "../dto/create-services";
import { Services } from "../entities/services.entity";

export abstract class ServicesRepository {
    abstract create(data: CreateServicesDto): Promise<Services>
}