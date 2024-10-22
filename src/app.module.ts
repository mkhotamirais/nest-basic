import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { Less1Module } from './less1/less1.module';

@Module({
  imports: [UsersModule, Less1Module],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
