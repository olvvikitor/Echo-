import { IUser } from 'src/modules/users/domain/entities/IUser'

export class Post{
  id: string
  content: string
  author : IUser
  comments: string[]
  reactions: number
}