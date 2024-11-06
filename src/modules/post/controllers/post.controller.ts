import { Body, Controller, Get, Header, Inject, Injectable, Param, Post, Put, Req, UnauthorizedException, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { PostService } from '../services/post.service';
import { CreatePostDto } from '../domain/entities/create-post-dto';
import { AuthGuard } from 'src/shared/middleweres/auth.guard';

@Injectable()
@Controller('posts')
@UseGuards(AuthGuard)
export class PostController{
  constructor(
    @Inject()
    private postService:PostService
  ){}

  @Post('/new')
  async createPost(@Body() createPostDto : CreatePostDto, @Req() request: any){

    if(!request.user){
      throw new UnauthorizedException('Token inválido ou expirado')
    }
    
    const id = request.user.payload.id
    createPostDto.author = id
    
    return await this.postService.createPost(createPostDto)
  }

  @Get('/all')
  async showAll(@Req() request: any){

    if(!request.user){
      throw new UnauthorizedException('Token inválido ou expirado')
    }

    return await this.postService.findAll();

  }

  
}

