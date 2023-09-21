import { Module } from '@nestjs/common';
import { ClientsCommentsService } from './clients-comments.service';
import { ClientsCommentsController } from './clients-comments.controller';
import { PrismaService } from 'src/database/prisma.service';
import { ClientsCommentsRepository } from './repositories/clients-comments-repository';
import { PrismaClientsCommentsRepository } from './repositories/prisma/prisma-clients-comments-repository';

@Module({
  providers: [
    ClientsCommentsService,
    PrismaService,
    {
      provide: ClientsCommentsRepository,
      useClass: PrismaClientsCommentsRepository
    }
  ],
  controllers: [ClientsCommentsController]
})
export class ClientsCommentsModule {}
