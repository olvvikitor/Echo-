import { Inject, Injectable } from '@nestjs/common';
import { InterfaceUserRepository } from '../domain/repositories/interface.user.repository';
import { CreateUserDto } from '../domain/entities/dtos/create-user-dto';
import { InterfaceHashProvider } from 'src/shared/providers/interfaces/InterfaceHashProvider';
import { ViewUserDto } from '../domain/entities/dtos/view-user-dto';
import AppError from 'src/shared/errors/app.error';

@Injectable()
export class UserServices {
constructor(
  @Inject('InterfaceUserRepository')
  private userRepository: InterfaceUserRepository,
  @Inject('InterfaceHashProvider')
  private hashProvider:InterfaceHashProvider
){}
  async createUser(user: CreateUserDto):Promise<ViewUserDto>{
    const exists = await this.userRepository.findByEmail(user.email);

    if(exists){
      throw new AppError('Email já cadastrado, tente outro', 409)
    }
    
    const passwordHash = await this.hashProvider.generateHash(user.password);
    user.password = passwordHash

    const userCreated = await this.userRepository.create(user)

    const userDto:ViewUserDto = {
      id: userCreated.id,
      email: userCreated.email,
    }

    return userDto
  }

  async findById(id:string):Promise<ViewUserDto | null>{
    const user = await this.userRepository.findById(id);
    if(!user){
      throw new AppError('Usuario não encontrado')
    } 
    const userDto:ViewUserDto ={
      email:user.email,
      id: user.id
    }
    return userDto
  }
}