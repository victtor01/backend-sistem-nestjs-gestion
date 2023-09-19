import { CreateServicesDto } from 'src/services/dto/create-services';
import { Services } from 'src/services/entities/services.entity';
import { ServicesRepository } from '../services-repository';
import { PrismaService } from 'src/database/prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PrismaServicesRepository implements ServicesRepository {
  constructor(private readonly Prisma: PrismaService) {}

  async getAll(userId: number): Promise<Services[]> {
    return await this.Prisma.services.findMany({
      where: {
        userId
      },
    });
  }

  async create(data: CreateServicesDto): Promise<Services> {
    const { userId, ...props } = data;
    const res = await this.Prisma.services.create({
      data: {
        ...props,
        user: {
          connect: { id: userId },
        },
      },
    });
    return res;
  }

  async delete(id: number): Promise<boolean> {
    const error = await this.Prisma.services.delete({
      where: {
        id,
      },
    })
    return error ? true : false
  }
}
