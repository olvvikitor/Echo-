import { Body, Controller, Get, Inject, Injectable, Post, UseGuards, Req, UnauthorizedException } from '@nestjs/common';

import { LoginUserService } from '../../services/user.login.service';
import { CreateUserDto } from '../../domain/entities/dtos/create-user-dto';
import { AuthGuard } from 'src/shared/middleweres/auth.guard';
import { PostService } from 'src/modules/post/services/post.service';
import { LoginUserDto } from '../../domain/entities/dtos/login-user-dto';

@Injectable()
@Controller('auth')
export class LoginUserControllers{
  constructor(
    @Inject()
    private LoginUserService : LoginUserService,
  ){}

  @Post()
  public async login(@Body() user: LoginUserDto){
    return await this.LoginUserService.login(user)
  }

}
