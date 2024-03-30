import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { userController } from './user.controller';
import { AppService } from './app.service';
import { userService } from './user.service';

@Module({
  imports: [],
  controllers: [AppController, userController],
  providers: [AppService, userService],
})
export class AppModule {}
