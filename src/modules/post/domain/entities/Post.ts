import { IUser } from 'src/modules/users/domain/entities/IUser'
import { Reaction } from './reaction.entity'

export class Post{
  id: string
  content: string
  author : IUser
  comments: string[]
  reactions: Reaction[]
}