import { Clients } from 'src/clients/entities/clients.entity';
import { ClientsRepository } from '../clients-repository';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { CreateClientDto } from 'src/clients/dto/create-clients.dto';
import { UpdateClientDto } from 'src/clients/dto/update-clients.dto';
import { CreateClientsServicesDto } from 'src/clients/dto/create-clients-services.dto';

@Injectable()
export class PrismaClientsRepository implements ClientsRepository {
  constructor(private readonly Prisma: PrismaService) { }

  async create(body: CreateClientDto): Promise<Clients> {
    const { listId, ...props } = body;
    return this.Prisma.clients.create({
      data: {
        ...props,
        list: {
          connect: {
            id: listId,
          },
        },
      },
    });
  }

  async update({
    id,
    body,
  }: {
    id: number;
    body: UpdateClientDto;
  }): Promise<boolean> {
    const res = await this.Prisma.clients.update({
      data: body,
      where: {
        id,
      },
    });

    return res ? true : false;
  }

  async createClientsServices(
    body: CreateClientsServicesDto,
  ): Promise<Clients> {
    console.log('passou')
    const { clientId, services } = body;
    const connectServices = services.map((serviceId) => ({ id: serviceId }));

    return await this.Prisma.clients.update({
      where: {
        id: clientId,
      },
      data: {
       services: {
        connect: connectServices
       }
      },
    });
  }
}
