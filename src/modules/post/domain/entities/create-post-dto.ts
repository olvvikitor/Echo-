import { OmitType } from '@nestjs/mapped-types'
import { Post } from './Post'
import { Foto } from 'src/modules/fotos/domain/entities/foto'

export class CreatePostDto extends OmitType(Post,['id', 'comments', 'reactions', 'author']){
  content: string
  id_author: string
  photos: Foto[]
  constructor(content: string, id_author : string){
    super()
    this.content = content
    this.id_author = id_author
    this.photos = []
  }
}