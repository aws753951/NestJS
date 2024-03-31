import { Module } from '@nestjs/common';
import { CoreService } from './service';

@Module({
  imports: [],
  controllers: [], // 不需要路由，純粹提供service的module
  providers: [CoreService],
  exports: [CoreService], // 似乎可不暴露就讓其他module交叉使用
})
export class CoreModule {}
