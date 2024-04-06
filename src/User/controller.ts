import { Controller, Get, Logger, Param, Query, Headers } from '@nestjs/common';
import { UserService } from './service';
import { CoreService } from 'src/Core/service';

@Controller('user')
export class userController {
  private readonly logger = new Logger(userController.name); // 自定義logger描述
  constructor(
    private readonly userService: UserService,
    private readonly coreService: CoreService,
  ) {}

  @Get('param/:key')
  getParam(@Param('key') key: string): string {
    return `${key}`;
  }

  @Get('query')
  getQuery(@Query('a') a: string, @Query('b') b: string): string {
    return `a: ${a}, b: ${b}`;
  }

  @Get('queryall')
  // @Query() 不帶參數，則 ?a=123&b=456  => 使 q成為了object  {a: 123, b: 456}
  getQueryAll(@Query() q: any): string {
    return `a: ${q.a}, b: ${q.b}`;
  }

  @Get('headers')
  getHeader(@Headers() headers: any): string {
    // return `${headers}`;
    return `${JSON.stringify(headers)}`;
  }
}

// request object的選擇
// https://docs.nestjs.com/controllers
