import { IsEmail, IsString, IsUUID } from 'class-validator'
import { v4 } from 'uuid'

export class User{

  @IsUUID()
  id = v4()
  @IsString()
  name:string
  @IsString()
  @IsEmail()
  email: string
  @IsString()
  password: string

  constructor(name:string, email:string, password:string){
    this.name = name
    this.email = email,
    this.password = password
  }
  
} 