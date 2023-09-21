import { BadRequestException, Injectable } from '@nestjs/common';
import { ClientsComments } from './entities/clients-comments.entity';
import { ClientsCommentsRepository } from './repositories/clients-comments-repository';
import { CreateClientsCommentsDto } from './dto/create-clients-comments.dto';

@Injectable()
export class ClientsCommentsService {
  constructor(
    private readonly clientsCommentsRepository: ClientsCommentsRepository,
  ) {}

  async create(data: CreateClientsCommentsDto): Promise<ClientsComments> {
    const { text } = data;
    if (text.length > 100) {
      new BadRequestException({
        message: 'número de caracteres passado!',
      });
    }
    return await this.clientsCommentsRepository.create(data);
  }
}
