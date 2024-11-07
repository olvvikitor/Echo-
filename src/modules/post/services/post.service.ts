import { ConflictException, Inject, Injectable, NotFoundException } from '@nestjs/common';
import { InterfacePostRepository } from '../domain/repositories/InterfacePostRepository';
import { CreatePostDto } from '../domain/entities/create-post-dto';
import { Post } from '../domain/entities/Post';
import { InterfaceUserRepository } from 'src/modules/users/domain/repositories/interface.user.repository';

@Injectable()
export class PostService{
  constructor(
    @Inject('InterfacePostRepository')
    private postRepository : InterfacePostRepository,
    @Inject('InterfaceUserRepository')
    private userRepository:InterfaceUserRepository,

  ){}

  async createPost(post: CreatePostDto):Promise<void>{
    await this.postRepository.create(post)
  }

  async findAll():Promise<Post[]>{
    return await this.postRepository.findAll()
  }

}