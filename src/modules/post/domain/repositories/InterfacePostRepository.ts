import { CreatePostDto } from '../entities/create-post-dto';
import { Post } from '../entities/Post';

export interface InterfacePostRepository{
  create(post: CreatePostDto):Promise<void>
  findAllByIdUser(id: string):Promise<Post[]>
  findById(id:string):Promise<Post|null>
  findAll():Promise<Post[]>
  update(id: string, post:Post):Promise<void>
}