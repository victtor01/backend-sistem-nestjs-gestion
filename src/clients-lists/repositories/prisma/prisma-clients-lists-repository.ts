import { Injectable } from '@nestjs/common';
import { ClientsListsRepository } from '../clients-lists-repository';
import { PrismaService } from 'src/database/prisma.service';
import { ClientsLists } from '../../entities/clients-lists.entity';
import { CreateClientsListsDto } from 'src/clients-lists/dto/create-clients-lists.dto';

@Injectable()
export class PrismaClientsListsRepository implements ClientsListsRepository {
  constructor(private readonly Prisma: PrismaService) {}

  async getAll(userId: number): Promise<ClientsLists[]> {
    return await this.Prisma.clients_lists.findMany({
      where: {
        userId,
      },
      include: {
        clients: {
          include: {
            clients_services: {
              include: {
                services: true, // Inclua informações sobre o serviço associado
              },
            },
          },
        },
      },
    });
  }

  async create(body: CreateClientsListsDto): Promise<ClientsLists> {
    const { name, color, userId } = body;
    return this.Prisma.clients_lists.create({
      data: {
        name,
        color,
        user: {
          connect: { id: userId },
        },
      },
    });
  }
}
