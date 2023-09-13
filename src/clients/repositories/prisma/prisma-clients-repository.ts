import { Clients } from 'src/clients/entities/clients.entity';
import { ClientsRepository } from '../clients-repository';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { CreateClientDto } from 'src/clients/dto/create-clients.dto';
import { UpdateClientDto } from 'src/clients/dto/update-clients.dto';

@Injectable()
export class PrismaClientsRepository implements ClientsRepository {
  constructor(private readonly Prisma: PrismaService) {}
  async create(body: CreateClientDto): Promise<Clients> {
    return this.Prisma.clients.create({
      data: body,
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

    if (res) {
      return true;
    }

    return false;
  }
}
