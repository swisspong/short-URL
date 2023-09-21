import { NestFactory } from '@nestjs/core';
import { ShortUrlModule } from './short_url.module';
import { ValidationPipe } from '@nestjs/common';
import cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(ShortUrlModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true
    }),
  );
  app.use(cookieParser());
  await app.listen(8001);
}
bootstrap();
