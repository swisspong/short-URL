import { NestFactory } from '@nestjs/core';
import { ShortUrlModule } from './short_url.module';

async function bootstrap() {
  const app = await NestFactory.create(ShortUrlModule);
  await app.listen(3000);
}
bootstrap();
