import { Body, Controller, Get, Inject, Injectable, Param, Post, Req, UnauthorizedException, UseGuards } from '@nestjs/common';
import { IUser } from '../../domain/entities/IUser';
import { UserServices } from '../../services/user.service';
import { AuthGuard } from 'src/shared/middleweres/auth.guard';
import { PostService } from 'src/modules/post/services/post.service';

@Injectable()
@Controller('user')
@UseGuards(AuthGuard)
export class UserControllers{
  constructor(
    @Inject()
    private userService : UserServices,
    @Inject()
    private postservice: PostService
  ){}

  @Post()
  public async create(@Body() user: IUser){
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
