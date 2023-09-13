import { Controller, Get, Post, Body, Patch, Param, Delete, Request, Req } from '@nestjs/common';
import { CreateAccountDto } from './dto/create-account.dto';
import { AccountRepository } from './repositories/account-repository';
import { User } from 'src/users/entities/user.entity';

@Controller('accounts')
export class AccountsController {
  constructor(private AccountRepository: AccountRepository) { }


  @Get()
  async getAll(@Request() req: any) {
    const { id } = req.user;
    return await this.AccountRepository.all({ userId: id });
    
  }

  @Post('create')
  async create(@Body() data: CreateAccountDto, @Request() req: any) {
    const { id } = req.user;
    data.userId = id;
    return await this.AccountRepository.create(data);
  }
}
