import { CreateUserDto } from '../entities/dtos/create-user-dto';
import { IUser } from '../entities/IUser';

export interface InterfaceUserRepository{
  create(user:CreateUserDto):Promise<IUser>;
  findById(id:string):Promise<IUser | null>
  findByEmail(email:string):Promise<IUser | null>
}