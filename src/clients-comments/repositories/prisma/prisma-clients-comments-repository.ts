import { CreateClientsCommentsDto } from 'src/clients-comments/dto/create-clients-comments.dto';
import { ClientsComments } from 'src/clients-comments/entities/clients-comments.entity';
import { ClientsCommentsRepository } from '../clients-comments-repository';
import { PrismaService } from 'src/database/prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PrismaClientsCommentsRepository
  implements ClientsCommentsRepository
{
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateClientsCommentsDto): Promise<ClientsComments> {
    const { clientId, ...props } = data;
    return await this.prisma.clients_comments.create({
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
