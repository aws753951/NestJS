import { Controller, Get } from '@nestjs/common';
import { UserService } from './service';

@Controller('user')
export class userController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getUser(): string {
    return this.userService.getUser();
  }
}
