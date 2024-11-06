import {IsNotEmpty } from 'class-validator'

export class Reaction {
  
  @IsNotEmpty()
  id_post : string
  @IsNotEmpty()
  id_user : string
  @IsNotEmpty()
  data: Date
  @IsNotEmpty()
  type: 'negative' | 'positive'

  constructor(idPost:string , idUser: string, data : Date, type: 'negative' | 'positive') {
    this.id_post = idPost
    this.data = data,
    this.type = type,
    this.id_user = idUser
  }
}