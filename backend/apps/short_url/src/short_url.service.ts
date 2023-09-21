import { Injectable } from '@nestjs/common';

@Injectable()
export class ShortUrlService {
  getHello(): string {
    return 'Hello World!';
  }
}
