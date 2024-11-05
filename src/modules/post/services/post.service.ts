import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { InterfacePostRepository } from '../domain/repositories/InterfacePostRepository';
import { CreatePostDto } from '../domain/entities/create-post-dto';
import { Post } from '../domain/entities/Post';
import { InterfaceUserRepository } from 'src/modules/users/domain/repositories/interface.user.repository';
import { Reaction } from '../domain/entities/reaction.entity';

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

  async findAll(id: string):Promise<Post[]>{
    return await this.postRepository.findAllByIdUser(id)
  }

  async updateReaction(idPost: string, idUser: string):Promise<void>{
    const post = await this.postRepository.findById(idPost);
    if(!post){
      throw new NotFoundException
    }
    const user = await this.userRepository.findById(idUser)
    if(!user){
      throw new NotFoundException
    }
    const reaction: Reaction ={
      data: new Date(),
      id_user : user.id,
      type: 'positive'
    }
    post.reactions.push(reaction)

    await this.postRepository.update(post.id, post);
  }
}