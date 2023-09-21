import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule], // Import the ConfigModule to use ConfigService
      useFactory: (configService: ConfigService) => {
        console.log(__dirname + '/../../../../**/*.entity{.ts,.js}')
        return {

          type: 'mysql',
          host: configService.get('DATABASE_HOST'), // Use config values
          port: Number(configService.get<number>('DATABASE_PORT')),
          username: configService.get('DATABASE_USERNAME'),
          password: configService.get('DATABASE_PASSWORD'),
          database: configService.get('DATABASE_NAME'),
          entities: [__dirname + '/../../../../**/*.entity{.ts,.js}'],
          logging:true,
          synchronize: true,
        }
      },
      inject: [ConfigService], // Inject the ConfigService
    }),
  ],
})
export class OrmConfigModule { }