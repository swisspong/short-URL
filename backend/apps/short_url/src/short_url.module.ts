import { Module } from '@nestjs/common';
import { ShortUrlController } from './short_url.controller';
import { ShortUrlService } from './short_url.service';
import { ConfigModule } from '@nestjs/config';
import { OrmConfigModule } from '@app/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Urls } from './entities/urls.entity';
import { authProviders } from '@app/common/providers';
import { JwtStrategy } from '@app/common/strategy';


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    OrmConfigModule,
    TypeOrmModule.forFeature([Urls])
  ],
  controllers: [ShortUrlController],
  providers: [
    ...authProviders,
    JwtStrategy,
    ShortUrlService
  ],
})
export class ShortUrlModule { }
