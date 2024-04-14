import {
  Controller,
  Get,
  Logger,
  Param,
  Query,
  Headers,
  UseInterceptors,
  UseGuards,
} from '@nestjs/common';
import { UserService } from './service';
import { CoreService } from 'src/Core/service';
import { LoggingInterceptor } from 'src/logging.interceptor';
import { AuthGuard } from 'src/auth.guard';
import { UserInfo } from 'src/user.decorator';

// 使用useGuards主要針對 控制器級別(controller)或路由處理程序級別(handler)設置
// 若要以應用程序級別，請用APP_GUARD => https://docs.nestjs.com/guards
// 可針對任何路由設置守衛
@UseGuards(new AuthGuard(15))
// 可針對任何路由設置攔截器 ex. /user/底下全部設置攔截器
@UseInterceptors(new LoggingInterceptor())
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

  // 接收router: /user/request_a_level?a=100   (a=100不一定要寫)
  // 不一定要填寫query，是因為在auth.quard會辨別妳有沒有 request.query.a ，並做相關的處理
  @Get('request_a_level')
  // 由於自製的decorator沒有參數，所以回傳userInfo整個object
  getLevel(@UserInfo('request_a_class') lvclass: any): string {
    console.log(lvclass);
    // 這個info有這個屬性，是因為在auth.quard裡面有先替request加工
    return `requst_a_level: ${lvclass} `;
  }
}

// request object的選擇
// https://docs.nestjs.com/controllers
