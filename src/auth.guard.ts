// https://docs.nestjs.com/guards
// 通常用於驗證權限
// 被擋下匯回傳403錯誤

import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private minLevel: number = 0) {}
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    // 取得上下文後轉成http請求 (還有其他請求)
    const request = context.switchToHttp().getRequest();
    // 可以自行設定要看request的甚麼
    const a = parseInt(request.query.a || '0');
    console.log(`request.a: ${a}`);
    return a > this.minLevel;
  }
}
