import { Module } from '@nestjs/common';
import { AccountsController } from './accounts.controller';
import { PrismaService } from 'src/database/prisma.service';
import { AccountRepository } from './repositories/account-repository';
import { PrismaAccountRepository } from './repositories/prisma/prisma-account-repository';

@Module({
  controllers: [AccountsController],
  providers: [
    PrismaService,
    {
      provide: AccountRepository,
      useClass: PrismaAccountRepository,
    },
  ]
})

export class AccountsModule {}

