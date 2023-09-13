import { Controller, Post } from '@nestjs/common';
import { Register } from './entities/register.entity';

@Controller('registers')
export class RegistersController {
    @Post('create') 
    async create(): Promise<Register> {
        return 
    }
}
