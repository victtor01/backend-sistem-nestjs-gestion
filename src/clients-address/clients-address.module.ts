import { Module } from '@nestjs/common';
import { ClientsAddressService } from './clients-address.service';
import { PrismaService } from 'src/database/prisma.service';
import { ClientsAddressRepository } from './repositories/clients-address-repository';
import { PrismaClientsAddressRepository } from './repositories/prisma/prisma-clients-address-repository';
import { ClientsAddressController } from './clients-address.controller';

@Module({
  providers: [
    ClientsAddressService,
    PrismaService,
    {
      provide: ClientsAddressRepository,
      useClass: PrismaClientsAddressRepository,
    },
  ],
  exports: [ClientsAddressRepository, ClientsAddressService],
  controllers: [ClientsAddressController],
})
export class ClientsAddressModule {}
