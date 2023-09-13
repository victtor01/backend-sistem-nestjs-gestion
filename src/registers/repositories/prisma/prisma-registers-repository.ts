import { Register } from "src/registers/entities/register.entity";
import { RegistersRepository } from "../registers-repository";
import { Injectable } from "@nestjs/common";

@Injectable()
export class PrismaRegistersRepository implements RegistersRepository {
    async create(): Promise<Register> {
        return 
    }
}