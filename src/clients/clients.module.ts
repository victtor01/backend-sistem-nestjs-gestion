import { Module } from '@nestjs/common';
import { ClientsController } from './clients.controller';
import { PrismaService } from 'src/database/prisma.service';
import { ClientsRepository } from './repositories/clients-repository';
import { PrismaClientsRepository } from './repositories/prisma/prisma-clients-repository';

@Module({
  controllers: [ClientsController],
  providers: [
    PrismaService,
    {
      provide: ClientsRepository,
      useClass: PrismaClientsRepository,
    },
  ],
})
export class ClientsModule {}
