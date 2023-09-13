import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { PrismaService } from 'src/database/prisma.service';
import { UsersRepository } from './repositories/users-repository';
import { PrismaUsersRepository } from './repositories/prisma/prisma-users-repository';
import { UsersService } from './users.service';
import { ConfirmationCodesModule } from 'src/confirmation-codes/codes-confirmation';

@Module({
  imports: [ConfirmationCodesModule],
  controllers: [UsersController],
  providers: [
    UsersService,
    PrismaService,
    {
      provide: UsersRepository,
      useClass: PrismaUsersRepository,
    },
  ],
  exports: [UsersRepository],
})
export class UsersModule {}
