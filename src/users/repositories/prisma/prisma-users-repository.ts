import { Injectable } from '@nestjs/common';
import { UsersRepository } from '../users-repository';
import { PrismaService } from 'src/database/prisma.service';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { User } from 'src/users/entities/user.entity';

@Injectable()
export class PrismaUsersRepository implements UsersRepository {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateUserDto): Promise<User> {
    return await this.prisma.users.create({
      data: {
        ...data,
        clients_lists: {
          create: [
            { name: 'Pendente' },
            { name: 'Andamento' },
            { name: 'Concluído' },
          ],
        },
      },
    });
  }

  async findAll(): Promise<any> {
    return await this.prisma.users.findFirst({
      include: {
        accounts: {
          include: {
            registers: true,
          },
        },
      },
    });
  }

  async findOne(email: string): Promise<User | undefined> {
    return await this.prisma.users.findUnique({
      where: {
        email: email,
      },
    });
  }

  async findOneByEmail(email: string): Promise<User | undefined> {
    const user = await this.prisma.users.findUnique({
      where: {
        email: email,
      },
    });

    return user;
  }

  async update(userId: number, data: any): Promise<boolean> {
    const update = await this.prisma.users.update({
      where: {
        id: userId,
      },
      data: data,
    });
    return true;
  }
}
