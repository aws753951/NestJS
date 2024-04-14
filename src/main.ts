import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { GlobalLoggingInterceptor } from './logging.global_interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // 全局的攔截器
  app.useGlobalInterceptors(new GlobalLoggingInterceptor());
  await app.listen(3000);
}
bootstrap();
