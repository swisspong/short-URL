import { Controller, Get, } from '@nestjs/common';
import { UsersService } from './users.service';
import { GetUserId } from '@app/common/decorators';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {

  }
  @Get()
  me(@GetUserId() userId: string) {
    return this.usersService.getUserById(userId)
  }
}
