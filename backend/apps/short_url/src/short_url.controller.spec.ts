import { Test, TestingModule } from '@nestjs/testing';
import { ShortUrlController } from './short_url.controller';
import { ShortUrlService } from './short_url.service';

describe('ShortUrlController', () => {
  let shortUrlController: ShortUrlController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ShortUrlController],
      providers: [ShortUrlService],
    }).compile();

    shortUrlController = app.get<ShortUrlController>(ShortUrlController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(shortUrlController.getHello()).toBe('Hello World!');
    });
  });
});
