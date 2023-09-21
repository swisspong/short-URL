import { Body, Controller, Delete, Get, Param, Patch, Post, Req, Res } from '@nestjs/common';
import { ShortUrlService } from './short_url.service';
import { GetUserId, Public } from '@app/common/decorators';
import { Request, Response } from 'express';
import { UrlPayloadDto } from './dto/url-payload.dto';

@Controller()
export class ShortUrlController {
  constructor(private readonly shortUrlService: ShortUrlService) { }

  @Get()
  getMyUrl(@GetUserId() userId: string) {
    return this.shortUrlService.myUrl(userId)
  }
  @Public()
  @Get(':urlId')
  redirect(@Param('urlId') urlId: string, @Res() res: Response) {
    return this.shortUrlService.redirect(urlId, res)
  }
  @Post()
  createUrl(@Req() req: Request, @GetUserId() userId: string, @Body() payload: UrlPayloadDto) {
    return this.shortUrlService.createUrl(req, userId, payload)

  }
  @Patch(':urlId')
  updateUrl(@Req() req: Request, @GetUserId() userId: string, @Body() payload: UrlPayloadDto, @Param('urlId') urlId: string) {
    return this.shortUrlService.updateUrl(userId, urlId, payload)
  }
  @Delete(':urlId')
  deleteUrl(@Req() req: Request, @GetUserId() userId: string, @Param('urlId') urlId: string) {
    return this.shortUrlService.deleteUrl(userId, urlId)
  }
}
