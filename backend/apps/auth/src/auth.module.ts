import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { HashUtilsModule, JwtUtilsModule, OrmConfigModule } from '@app/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from './entities/users.entity';
import { authProviders } from '@app/common/providers';
import { JwtStrategy } from '@app/common/strategy';
import { UsersModule } from './users/users.module';




@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: './apps/auth/.env',
    }),
    TypeOrmModule.forFeature([Users]),
    OrmConfigModule,
    HashUtilsModule,
    JwtUtilsModule,
    UsersModule
  ],
  controllers: [AuthController],
  providers: [
    ...authProviders,
    JwtStrategy,
    AuthService
  ],
})
export class AuthModule { }
