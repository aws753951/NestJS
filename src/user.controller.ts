import { Controller, Get } from '@nestjs/common';
import { userService } from './user.service';

@Controller('user')
export class userController {
  constructor(private readonly appService: userService) {}

  @Get()
  getUser(): string {
    return this.appService.getUser();
  }
}