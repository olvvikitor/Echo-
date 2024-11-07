export class User{
  id: string
  email: string
  password: string
  constructor(id:string, email:string, password:string){
    this.email = email,
    this.id = id,
    this.password = password
  }
} 