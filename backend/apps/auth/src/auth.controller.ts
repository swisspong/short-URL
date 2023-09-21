import { Body, Controller, Get, Post, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SigninLocalDto } from './dto/signin-local.dto';
import { Response } from 'express';
import { SignupLocalDto } from './dto/signup-local.dto';
import { Public } from '@app/common/decorators';

@Public()
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @Post('signin')
  signin(@Body() payload: SigninLocalDto, @Res() res: Response) {
    this.authService.signinLocal(payload, res)
  }
  @Post('signup')
  signup(@Body() payload: SignupLocalDto, @Res() res: Response) {
    this.authService.signupLocal(payload, res)
  }
  @Post('signout')
  signout(@Res() res: Response) {
    this.authService.signout(res)
  }

}
