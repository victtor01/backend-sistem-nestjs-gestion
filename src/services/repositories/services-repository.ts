import { CreateServicesDto } from "../dto/create-services";
import { Services } from "../entities/services.entity";

export abstract class ServicesRepository {
    abstract getAll(userId: number): Promise<Services[]>
    abstract create(data: CreateServicesDto): Promise<Services>
    abstract delete(serviceId: number): Promise<boolean>
}