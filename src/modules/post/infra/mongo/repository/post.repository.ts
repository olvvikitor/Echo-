import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Mode } from 'fs';
import { Model } from 'mongoose';
import { CreatePostDto } from 'src/modules/post/domain/entities/create-post-dto';
import { Post } from 'src/modules/post/domain/entities/Post';
import { InterfacePostRepository } from 'src/modules/post/domain/repositories/InterfacePostRepository';

@Injectable()
export class PostRepository implements InterfacePostRepository{

  constructor(
    @InjectModel('Post')
    private model: Model<Post>
  ){}
 async update(id: string, post: Post): Promise<void> {
    await this.model.updateOne({id : id}, post)
  }
  async findById(id: string): Promise<Post | null> {
    return await this.model.findOne({id: id})
  }

  async findAll(): Promise<Post[]> {
    return await this.model.find();
  }

  async findAllByIdUser(id: string): Promise<Post[]> {
    return await this.model.find({author: id})
  }

  async create(post: CreatePostDto): Promise<void> {
    (await this.model.create(post)).save()
  }
  
}