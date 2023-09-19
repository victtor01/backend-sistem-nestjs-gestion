import { Injectable } from '@nestjs/common';
import { ClientsAddress } from 'src/clients-address/entities/clients-address.entity';
import { ClientsAddressRepository } from '../clients-address-repository';
import { CreateClientsAddressDto } from 'src/clients-address/dto/create-clients-address.dto';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class PrismaClientsAddressRepository
  implements ClientsAddressRepository
{
  constructor(private readonly prisma: PrismaService) {}
  async create(data: CreateClientsAddressDto): Promise<ClientsAddress> {
    const { clientId, ...props } = data;
    return await this.prisma.clients_address.create({
      data: {
        ...props,
        client: {
          connect: {
            id: clientId,
          },
        },
      },
    });
  }
}
