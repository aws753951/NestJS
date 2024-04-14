// https://docs.nestjs.com/interceptors

import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
// 攔截器的接口，派生出一個class
export class LoggingInterceptor implements NestInterceptor {
  // 該class實現這個接口
  // context: 請求的上下文
  // 得返還一個 Observable
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    // 攔截器的主體: 前置部分
    console.log('Before...');
    const now = Date.now();

    return next.handle().pipe(
      tap(() => {
        // 攔截器後置部分
        // 閉包特性，可以保存作用域外的變數的狀態 => now這個變數
        console.log(`After... ${Date.now() - now}ms`);
      }),
    );
  }
}
