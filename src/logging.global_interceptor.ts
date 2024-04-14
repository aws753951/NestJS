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
export class GlobalLoggingInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    console.log('全局來了');

    const now = Date.now();
    return next
      .handle()
      .pipe(tap(() => console.log(`全局測量時間... ${Date.now() - now}ms`)));
  }
}
