import { Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from '../domain/entities/dtos/create-user-dto';
import { InterfaceUserRepository } from '../domain/repositories/interface.user.repository';
import AppError from 'src/shared/errors/app.error';
import { InterfaceHashProvider } from 'src/shared/providers/interfaces/InterfaceHashProvider';
import { JwtProvider } from 'src/shared/providers/jwt/Jwt';

@Injectable()
export class LoginUserService{
  constructor(
    @Inject('InterfaceUserRepository')
    private userRepository:InterfaceUserRepository,
    @Inject('InterfaceHashProvider')
    private hashProvider:InterfaceHashProvider,
    @Inject('InterfaceTokenProvider')
    private jwtServide : JwtProvider
  ){}
  async login(loginDto: CreateUserDto):Promise<string>{

    const user = await this.userRepository.findByEmail(loginDto.email);
    if(!user){
      throw new AppError('Email não cadastrado')
    }
    const nome = () => {
      return 2
    }


    if(! await this.hashProvider.compareHash(loginDto.password, user.password)){
      throw new AppError('Email ou senha inválido')
    }

    const payload = {
      id: user.id,
      email: user.email
    }

    return await this.jwtServide.generateToken({payload})

  }
}
