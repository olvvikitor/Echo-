import {IsEnum, IsNotEmpty } from 'class-validator'

export class UpdateReactionDto{

  @IsNotEmpty()
  @IsEnum(['negative' , 'positive'])
  type: 'negative' | 'positive'
  constructor( type: 'negative' | 'positive') {
    this.type = type
  }
}