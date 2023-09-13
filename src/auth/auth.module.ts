import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UsersModule } from 'src/users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { ConfirmationCodesModule } from 'src/confirmation-codes/codes-confirmation';

@Module({
  imports: [
    UsersModule,
    ConfirmationCodesModule,
    JwtModule.register({
      global: true,
      secret: 'EXEMPLE',
      signOptions: { expiresIn: '5m' },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService],
  exports: [AuthService]
})
export class AuthModule {}
