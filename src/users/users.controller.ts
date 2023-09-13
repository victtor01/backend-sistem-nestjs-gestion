import {
  Controller,
  Get,
  Post,
  Body,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersRepository } from './repositories/users-repository';
import { Public } from 'src/constants';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { UsersService } from './users.service';
import { ConfirmationCodesRepository } from 'src/confirmation-codes/repositories/codes-confirmation-repository';
import { CreateConfirmationCodesDto } from 'src/confirmation-codes/dto/create-confirmation-codes.dto';

@Controller('users')
export class UsersController {
  constructor(
    private users: UsersRepository,
    private readonly usersService: UsersService,
    private readonly codesConfirmationRepository: ConfirmationCodesRepository
  ) { }

  @Public()
  @Post('register')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './uploads',
        filename: (req, file, cb) => {
          const uniqueFilename =
            new Date().getTime() + file.originalname.replace(/\s/g, '_');
          cb(null, `${uniqueFilename}`);
        },
      }),
    }),
  )
  async create(
    @Body() data: CreateUserDto,
    @UploadedFile() file: Express.Multer.File,
  ) {
    data.photo = file.filename;
    data.birth = new Date('2004/08/08');
    data.password = await this.usersService.hashPassword(data.password);
    data.type = 1;

    const user = await this.users.create(data);
    const { id } = user;
    await this.codesConfirmationRepository.create({ userId: id, code: '123456' })

    return {
      user,
    };
  }

  @Get('all')
  async findAll() {
    const res = await this.users.findAll();
    return {
      res,
    };
  }
}
