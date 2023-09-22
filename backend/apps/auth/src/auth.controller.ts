import { Body, Controller, Get, Post, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SigninLocalDto } from './dto/signin-local.dto';
import { Response } from 'express';
import { SignupLocalDto } from './dto/signup-local.dto';
import { Public } from '@app/common/decorators';


@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }
  @Public()
  @Get()
  hello() {
    return this.authService.hello()
  }
  @Public()
  @Post('signin')
  signin(@Body() payload: SigninLocalDto, @Res() res: Response) {
    console.log(payload)
    return this.authService.signinLocal(payload, res)
  }
  @Public()
  @Post('signup')
  signup(@Body() payload: SignupLocalDto, @Res() res: Response) {
    return this.authService.signupLocal(payload, res)
  }
  @Public()
  @Post('signout')
  signout(@Res() res: Response) {
    return this.authService.signout(res)
  }

}
