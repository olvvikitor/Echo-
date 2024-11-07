import { CreateUserDto } from '../entities/dtos/create-user-dto';
import { User } from '../entities/User';

export interface InterfaceUserRepository{
  create(user:CreateUserDto):Promise<User>;
  findById(id:string):Promise<User | null>
  findByEmail(email:string):Promise<User | null>
}