import { CreatePostDto } from '../entities/create-post-dto';
import { Post } from '../entities/Post';

export interface InterfacePostRepository{
  create(post: CreatePostDto):Promise<void>
  findAllByIdUser(id: string):Promise<Post[]>
  findAll():Promise<Post[]>
}