import { IsEmail, IsNotEmpty, IsString } from 'class-validator'

export class CreateUserDto{

  @IsEmail()
  @IsNotEmpty()
  email: string
  @IsString()
  @IsNotEmpty()
  password: string
  
  constructor(id:string, email:string, password:string){
    this.email = email,
    this.password = password
  }
}