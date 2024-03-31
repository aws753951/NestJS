import { Module } from '@nestjs/common';
import { userController } from './controller';
import { UserService } from './service';

@Module({
  imports: [],
  controllers: [userController],
  providers: [UserService],
})
export class UserModule {}
