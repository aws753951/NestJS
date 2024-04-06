import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './User';
import { CoreModule } from './Core';
import { CoreService } from './Core/service';

@Module({
  imports: [UserModule], // 1. 由AppModule開一個分支使用UserModule
  controllers: [AppController],
  providers: [AppService, CoreService], // 2. 直接把CoreService給暴露，讓其在AppModule交叉使用
})
export class AppModule {}
