import { Body, Controller, Get, Inject, Injectable, Post, Req, UnauthorizedException, UseGuards } from '@nestjs/common';
import { PostService } from '../services/post.service';
import { CreatePostDto } from '../domain/entities/create-post-dto';
import { AuthGuard } from 'src/shared/middleweres/auth.guard';


@Injectable()
@Controller('post')
@UseGuards(AuthGuard)
export class PostController{
  constructor(
    @Inject()
    private postService:PostService
  ){}

  @Post()
  async createPost(@Body() createPostDto : CreatePostDto, @Req() request: any){
    if(!request.user){
      throw new UnauthorizedException
    }
    const id = request.user.payload.id
    createPostDto.author = id
    
    return await this.postService.createPost(createPostDto)
  }
}