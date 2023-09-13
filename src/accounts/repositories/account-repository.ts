import { CreateAccountDto } from "../dto/create-account.dto";
import { Account } from "../entities/account.entity";

export abstract class AccountRepository {
    abstract all({userId}: {userId: number}) : Promise<Account[]>
    abstract create(data: CreateAccountDto) : Promise<any>;
}