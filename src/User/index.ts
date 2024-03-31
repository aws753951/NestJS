import { Module } from '@nestjs/common';
import { userController } from './controller';
import { UserService } from './service';
import { CoreService } from 'src/Core/service';

@Module({
  imports: [],
  controllers: [userController],
  providers: [UserService, CoreService],
})
export class UserModule {}
