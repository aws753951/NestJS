// https://docs.nestjs.com/custom-decorators
// 這個裝飾器是在控制器裡面發揮作用，所以經過guard新增的屬性可以獲取的到

import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const UserInfo = createParamDecorator(
  // 參數 + 上下文
  (param: string, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    const userInfo = request.userInfo;
    // 若沒有投入參數到裝飾器，則回傳整個object
    return userInfo[param] || userInfo;
  },
);
