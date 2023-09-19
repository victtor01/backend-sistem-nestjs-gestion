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
import { EmailService } from 'src/email/email.service';
import { ConfirmationCodesService } from 'src/confirmation-codes/confirmation-codes.service';

@Controller('users')
export class UsersController {
  constructor(
    private users: UsersRepository,
    private readonly usersService: UsersService,
    private readonly confirmationCodesService: ConfirmationCodesService,
    private readonly emailService: EmailService,
  ) {}

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
    const { id, email } = user;
    const { code } = await this.confirmationCodesService.create(id);

    this.emailService.sendEmail({
      to: email,
      text: code,
    });

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
