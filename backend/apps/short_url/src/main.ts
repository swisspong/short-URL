import { NestFactory } from '@nestjs/core';
import { ShortUrlModule } from './short_url.module';
import { ValidationPipe } from '@nestjs/common';
import * as cookieParser from 'cookie-parser';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(ShortUrlModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true
    }),
  );
  app.use(cookieParser());
  const configService = app.get<ConfigService>(ConfigService)

  await app.listen(configService.get<string>('PORT'));
}
bootstrap();
