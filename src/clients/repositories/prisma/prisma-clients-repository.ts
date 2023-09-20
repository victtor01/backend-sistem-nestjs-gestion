import { Clients } from 'src/clients/entities/clients.entity';
import { ClientsRepository } from '../clients-repository';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { CreateClientDto } from 'src/clients/dto/create-clients.dto';
import { UpdateClientDto } from 'src/clients/dto/update-clients.dto';
import { CreateClientsServicesDto } from 'src/clients/dto/create-clients-services.dto';
import { findOneClientsDto } from 'src/clients/dto/findOne-clients.dto';

@Injectable()
export class PrismaClientsRepository implements ClientsRepository {
  constructor(private readonly Prisma: PrismaService) { }

  async findOne({ code, userId }: findOneClientsDto): Promise<Clients> {
    return await this.Prisma.clients.findFirst({
      where: {
        code,
        userId
      },
      include: {
        services: true,
        address: true
      }
    })
  }

  async create(body: CreateClientDto): Promise<Clients> {
    const { listId, userId, ...props } = body;
    return this.Prisma.clients.create({
      data: {
        ...props,
        list: {
          connect: {
            id: listId,
          },
        },
        user: {
          connect: {
            id: userId
          }
        }
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

  async connectClientsServices(
    body: CreateClientsServicesDto,
  ): Promise<Clients> {
    const { clientId, services } = body;
    return await this.Prisma.clients.update({
      where: {
        id: clientId,
      },
      data: {
        services: {
          connect: services?.map((serviceId) => ({ id: serviceId }))
        }
      },
    });
  }
}
