import { Body, Controller, Get, Inject, Injectable, Param, Post, Req, UnauthorizedException, UseGuards } from '@nestjs/common';
import { UserServices } from '../../services/user.service';

import { CreateUserDto } from '../../domain/entities/dtos/create-user-dto';

@Injectable()
@Controller('user')
export class UserControllers{
  constructor(
    @Inject()
    private userService : UserServices,
  ){}

  @Post()
  public async create(@Body() user: CreateUserDto){
    return await this.userService.createUser(user)
  }
  @Get('/profile/:id')
  public async findById(@Param('id') id:string ){
    return await this.userService.findById(id)
  }
  
  // @Get('/profile')
  // public async getProfile(@Req() request: any){

  //   if(!request.user){
  //      throw new UnauthorizedException
  //   }
  //   const posts = await this.postservice.findAll(request.user.payload.id)

  //   return posts
    
  // }
}
