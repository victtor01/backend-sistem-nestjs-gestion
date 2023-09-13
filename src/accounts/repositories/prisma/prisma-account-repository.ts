import { Injectable } from '@nestjs/common';
import { CreateAccountDto } from 'src/accounts/dto/create-account.dto';
import { PrismaService } from 'src/database/prisma.service';
import { AccountRepository } from '../account-repository';

@Injectable()
export class PrismaAccountRepository implements AccountRepository {
  constructor(private readonly prisma: PrismaService) { }
  async create(data: CreateAccountDto): Promise<any> {
    const user = await this.prisma.users.findUnique({
      where: { id: data.userId },
    });
    if (!user) {
      return {
        error: true,
      };
    }
    const account = await this.prisma.accounts.create({
      data: {
        name: data.name,
        description: data.description,
        userId: Number(user.id),
      },
    });

    return {
      account,
    };
  }

  async all({userId}: {userId: number}){
    return await this.prisma.accounts.findMany({
      where: {
        userId
      }
    })
  }
}
