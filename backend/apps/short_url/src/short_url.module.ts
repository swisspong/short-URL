import { Module } from '@nestjs/common';
import { ShortUrlController } from './short_url.controller';
import { ShortUrlService } from './short_url.service';

@Module({
  imports: [],
  controllers: [ShortUrlController],
  providers: [ShortUrlService],
})
export class ShortUrlModule {}
