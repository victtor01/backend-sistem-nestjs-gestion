import { Module } from '@nestjs/common';
import { ClientsController } from './clients.controller';
import { PrismaService } from 'src/database/prisma.service';
import { ClientsRepository } from './repositories/clients-repository';
import { PrismaClientsRepository } from './repositories/prisma/prisma-clients-repository';
import { ClientsAddressModule } from 'src/clients-address/clients-address.module';
import { ClientsService } from './clients.service';

@Module({
  imports: [ClientsAddressModule],
  controllers: [ClientsController],
  providers: [
    PrismaService,
    {
      provide: ClientsRepository,
      useClass: PrismaClientsRepository,
    },
    ClientsService,
  ],
})
export class ClientsModule {}
