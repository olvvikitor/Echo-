import {IsNotEmpty } from 'class-validator'

export class Reaction{
  @IsNotEmpty()
  id_user : string
  @IsNotEmpty()
  data: Date
  @IsNotEmpty()
  type: 'negative' | 'positive'
  constructor(idUser: string, data : Date, type: 'negative' | 'positive') {
    this.data = data,
    this.type = type,
    this.id_user = idUser
  }
}