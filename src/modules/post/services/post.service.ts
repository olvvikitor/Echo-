import {Inject, Injectable, NotFoundException } from '@nestjs/common';
import { InterfacePostRepository } from '../domain/repositories/InterfacePostRepository';
import { CreatePostDto } from '../domain/entities/create-post-dto';
import { Post } from '../domain/entities/Post';
import { InterfaceUserRepository } from 'src/modules/users/domain/repositories/interface.user.repository';
import { ViewUserDto } from 'src/modules/users/domain/entities/dtos/view-user-dto';
import { CreateFotoDto } from 'src/modules/fotos/domain/dto/create-foto-dto';
import { Foto } from 'src/modules/fotos/domain/entities/foto';
import { v4 } from 'uuid';

@Injectable()
export class PostService{
  constructor(
    @Inject('InterfacePostRepository')
    private postRepository : InterfacePostRepository,
    @Inject('InterfaceUserRepository')
    private userRepository:InterfaceUserRepository,

  ){}

  async createPost(postDto: CreatePostDto, createFotoDto:CreateFotoDto[]):Promise<void>{
    console.log(createFotoDto)

    const user = await this.userRepository.findById(postDto.id_author);

    if(!user){
      throw new NotFoundException('Usuário não autenticado')
    }
    postDto.photos = []
    await Promise.all(createFotoDto.map(foto => {
      const fotos: Foto={
        id: v4(),
        path: foto.path,
        url: foto.url
      }
  
      postDto.photos.push(fotos)
    }))
    await this.postRepository.create(postDto)
  }

  async findAll():Promise<Post[]>{
    return await this.postRepository.findAll()
  }

}