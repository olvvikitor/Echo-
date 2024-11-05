import { Body, Controller, Get, Header, Inject, Injectable, Param, Post, Put, Req, UnauthorizedException, UseGuards } from '@nestjs/common';
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
      throw new UnauthorizedException('Token inválido ou expirado')
    }
    
    const id = request.user.payload.id
    createPostDto.author = id
    
    return await this.postService.createPost(createPostDto)
  }

  @Put('/:id')
  async updateReaction(@Param('id') id: string, @Req() request: any):Promise<void>{
    if(!request.user){
      throw new UnauthorizedException('Token inválido ou expirado')
    }
    
    const idUser = request.user.payload.id
    return await this.postService.updateReaction(id, idUser)
  } 
}