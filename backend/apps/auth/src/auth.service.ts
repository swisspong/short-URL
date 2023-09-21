import { BadRequestException, HttpException, Injectable, NotFoundException } from '@nestjs/common';
import { SigninLocalDto } from '../dto/signin-local.dto';
import { Response } from 'express';
import { SignupLocalDto } from '../dto/signup-local.dto';
import { PrismaService } from './database/prisma.service';
import { HashUtilsService, JwtUtilsService } from '@app/common';
import ShortUniqueId from 'short-unique-id';
// import { PrismaService } from '@app/common';

@Injectable()
export class AuthService {
  private readonly uid = new ShortUniqueId()
  constructor(
    private readonly prisma: PrismaService,
    private readonly hashUtilsService: HashUtilsService,
    private readonly jwtUtilsService: JwtUtilsService,
  ) { }
  async signinLocal(signinLocalDto: SigninLocalDto, res: Response) {
    try {

      // await this.prisma.us
      const user = await this.prisma.user.findUnique({ where: { email: signinLocalDto.email } })

      if (!user) throw new NotFoundException('Account not found.');

      if (!await this.hashUtilsService.comparePassword(signinLocalDto.password, user.password))
        throw new BadRequestException('Password not match.');

      const accessToken = await this.jwtUtilsService.signToken({ sub: user.id })
      res.cookie("token", accessToken, {
        // secure: true, 
        httpOnly: false,
        // sameSite: 'none',
        domain: 'example.com'
      })
      console.log(res)
      return { accessToken }
    } catch (error) {
      throw error
    }

  }
  async signupLocal(signupLocalDto: SignupLocalDto, res: any) {
    try {
      const user = await this.prisma.user.findUnique({ where: { email: signupLocalDto.email } })

      if (user) throw new BadRequestException('Email is already exist.');

      const hash = await this.hashUtilsService.hashPassword(signupLocalDto.password)

      // const newUser = await this.prisma.user.create({ ...id: `user_${this.uid.stamp(15)}`, password: hash })
      const newUser = await this.prisma.user.create({
        data: {
          id: `user_${this.uid.stamp(15)}`,
          password: hash,
          email: signupLocalDto.email,
          username: signupLocalDto.username,

        }
      })


      const accessToken = await this.jwtUtilsService.signToken({ sub: newUser.id })

      // res.cookie("token", accessToken)
      res.cookie("token", accessToken, {
        // secure: true, 
        httpOnly: false,
        // sameSite: 'none',
        domain: 'example.com'
      })
      return { accessToken }

    } catch (error) {
      throw error
    }
  }
  async signout(res: any) {
    res.clearCookie("token", { domain: 'example.com' })
  }
}
