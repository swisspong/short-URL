import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Urls } from './entities/urls.entity';
import { Repository } from 'typeorm';
import { UrlPayloadDto } from './dto/url-payload.dto';
import ShortUniqueId from 'short-unique-id';
import { Request, Response } from 'express';


@Injectable()
export class ShortUrlService {
  private readonly uid = new ShortUniqueId()
  constructor(
    @InjectRepository(Urls)
    private readonly urlsRepository: Repository<Urls>,
  ) { }
  async createUrl(req: Request, userId: string, { url }: UrlPayloadDto) {
    const existUrl = await this.urlsRepository.findOne({ where: { url, user_id: userId } })
    if (existUrl) throw new BadRequestException('Url is already exist.');
    await this.urlsRepository.save({
      id: `url_${this.uid.stamp(13)}`,
      url,
      // short_url: `${req.protocol}://${req.get('Host')}/api/url/${this.uid.stamp(10)}`,
      short_url: `${this.uid.stamp(10)}`,
      user_id: userId
    })
    return {
      message: "success"
    }
  }
  async updateUrl(userId: string, urlId: string, { url }: UrlPayloadDto) {
    const existUrl = await this.urlsRepository.findOne({ where: { url, user_id: userId } })
    if (existUrl) throw new BadRequestException('Url is already exist.');
    const urlToUpdate = await this.urlsRepository.findOne({ where: { user_id: userId, id: urlId } })
    if (!urlToUpdate) throw new BadRequestException('Url not found.');
    await this.urlsRepository.save({
      ...urlToUpdate,
      url
    })
    return {
      message: "success"
    }
  }
  async deleteUrl(userId: string, urlId: string) {
    const existUrl = await this.urlsRepository.findOne({ where: { id: urlId, user_id: userId } })
    if (!existUrl) throw new BadRequestException('Url not found.');
    await this.urlsRepository.delete({ user_id: userId, id: urlId })
    return {
      message: "success"
    }
  }
  async myUrl(userId: string) {
    const urls = await this.urlsRepository.find({ where: { user_id: userId } })
    return {
      data: urls
    }
  }
  async redirect(url: string, res: Response) {
    console.log(url)
    const existUrl = await this.urlsRepository.findOne({ where: { short_url: url } })
    console.log("fdsfds",existUrl)
    res.redirect(existUrl.url)
    return
  }

}
