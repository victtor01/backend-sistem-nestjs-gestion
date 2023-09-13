import { Injectable } from '@nestjs/common';
import { WorkspacesRepository } from '../workspaces-repository';
import { PrismaService } from 'src/database/prisma.service';
import { Workspace } from 'src/workspaces/entities/workspace.entity';
import { CreateWorkspaceDto } from 'src/workspaces/dto/create-workspace.dto';

@Injectable()
export class PrismaWorkspacesRepository implements WorkspacesRepository {
  constructor(private prisma: PrismaService) {}

  async create(
    data: CreateWorkspaceDto,
    userId: number,
  ): Promise<Workspace | undefined> {
    console.log(data);
    const workspace = await this.prisma.workspaces.create({
      data: {
        name: data.name,
        user: {
          connect: {
            id: userId,
          },
        },
      },
    });
    return workspace;
  }

  async all(id: number): Promise<Workspace[] | undefined> {
    return await this.prisma.workspaces.findMany({
      where: {
        userId: id,
      },
    });
  }

  async delete(ID: number): Promise<boolean> {
    try {
      const sucess = await this.prisma.workspaces.delete({
        where: {
          id: ID,
        },
      });

      if (sucess) {
        return true;
      }

      return false;
    } catch (error) {
      return false;
    }
  }
}
