import { Inject, Injectable } from '@nestjs/common';
import { InterfacePostRepository } from '../domain/repositories/InterfacePostRepository';
import { CreatePostDto } from '../domain/entities/create-post-dto';
import { Post } from '../domain/entities/Post';

@Injectable()
export class PostService{
  constructor(
    @Inject('InterfacePostRepository')
    private postRepository : InterfacePostRepository
  ){}

  async createPost(post: CreatePostDto):Promise<void>{
    
    await this.postRepository.create(post)
  }
  async findAll(id: string):Promise<Post[]>{
    return await this.postRepository.findAllByIdUser(id)
  }
}