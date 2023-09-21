import { Controller, Get } from '@nestjs/common';
import { ShortUrlService } from './short_url.service';

@Controller()
export class ShortUrlController {
  constructor(private readonly shortUrlService: ShortUrlService) {}

  @Get()
  getHello(): string {
    return this.shortUrlService.getHello();
  }
}
