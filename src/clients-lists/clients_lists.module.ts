import { Module } from '@nestjs/common';
import { ClientsListsController } from './clients_lists.controller';
import { PrismaService } from 'src/database/prisma.service';
import { ClientsListsRepository } from './repositories/clients-lists-repository';
import { PrismaClientsListsRepository } from './repositories/prisma/prisma-clients-lists-repository';

@Module({
  controllers: [ClientsListsController],
  providers: [
    PrismaService,
    {
      provide: ClientsListsRepository,
      useClass: PrismaClientsListsRepository,
    },
  ],
  exports: [],
})
export class ClientsListsModule {}
