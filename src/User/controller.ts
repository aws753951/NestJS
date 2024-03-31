import { Controller, Get, Logger } from '@nestjs/common';
import { UserService } from './service';
import { CoreService } from 'src/Core/service';

@Controller('user')
export class userController {
  private readonly logger = new Logger(userController.name); // 自定義logger描述
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
    console.log('console.log');
    Logger.log('Nest Logger'); // 使用Logger，在使用需變成 Logger.log
    this.logger.log('this.logger'); // 使用自己定義的log : this.logger，但背後是 Logger這個，所以需要 this.logger.log
    return this.coreService.getCore();
  }
}
