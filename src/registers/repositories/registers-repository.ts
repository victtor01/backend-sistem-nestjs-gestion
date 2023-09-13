import { Register } from "../entities/register.entity";

export abstract class RegistersRepository {
    abstract create() : Promise<Register>
}