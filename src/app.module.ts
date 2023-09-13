import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AccountsModule } from './accounts/accounts.module';
import { RegistersModule } from './registers/registers.module';
import { AuthModule } from './auth/auth.module';
import { AuthGuard } from './auth/auth.guard';
import { APP_GUARD } from '@nestjs/core';
import { WorkspacesModule } from './workspaces/workspaces.module';
import { ConfirmationCodesModule } from './confirmation-codes/codes-confirmation';
import { ClientsListsModule } from './clients-lists/clients_lists.module';
import { ClientsModule } from './clients/clients.module';
import { ServicesModule } from './services/services.module';

@Module({
  imports: [
    UsersModule,
    AccountsModule,
    RegistersModule,
    AuthModule,
    WorkspacesModule,
    ConfirmationCodesModule,
    ClientsListsModule,
    ClientsModule,
    ServicesModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
  ],
})
export class AppModule {}
