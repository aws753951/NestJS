import { Controller, Get } from '@nestjs/common';
import { UserService } from './service';
import { CoreService } from 'src/Core/service';

@Controller('user')
export class userController {
  constructor(
    private readonly userService: UserService,
    private readonly coreService: CoreService,
  ) {}

  @Get()
  getUser(): string {
    return this.userService.getUser();
  }

  @Get('core')
  getCore(): string {
    return this.coreService.getCore();
  }
}
