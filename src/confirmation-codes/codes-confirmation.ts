import { Module } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { ConfirmationCodesRepository } from './repositories/codes-confirmation-repository';
import { prismaCodesConfirmationRepository } from './repositories/prisma/prisma-codes-confirmation-repository';

@Module({
  imports: [],
  providers: [
    PrismaService,
    {
      provide: ConfirmationCodesRepository,
      useClass: prismaCodesConfirmationRepository,
    },
  ],
  exports: [ConfirmationCodesRepository]
})
export class ConfirmationCodesModule {}
