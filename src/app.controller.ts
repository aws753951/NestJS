import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { CoreService } from './Core/service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly coreService: CoreService, // 3. 由於已經作為Provider，這裡可以直接使用該Service
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('core')
  getCore(): string {
    return this.coreService.getCore();
  }
}
