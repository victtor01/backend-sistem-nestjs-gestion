import { Module } from '@nestjs/common';
import { WorkspacesController } from './workspaces.controller';
import { PrismaService } from 'src/database/prisma.service';
import { WorkspacesRepository } from './repositories/workspaces-repository';
import { PrismaWorkspacesRepository } from './repositories/prisma/prisma-workspaces-repository';

@Module({
  controllers: [WorkspacesController],
  providers: [
    PrismaService,
    {
      provide: WorkspacesRepository,
      useClass: PrismaWorkspacesRepository
    }
  ]
})

export class WorkspacesModule {}
