import { Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from '../domain/entities/dtos/create-user-dto';
import { InterfaceUserRepository } from '../domain/repositories/interface.user.repository';
import AppError from 'src/shared/errors/app.error';
import { InterfaceHashProvider } from 'src/shared/entities/providers/bcrypt/InterfaceHashProvider';
import { JwtProvider } from 'src/shared/providers/jwt/Jwt';
import { LoginUserDto } from '../domain/entities/dtos/login-user-dto';

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
  async login(loginDto: LoginUserDto):Promise<string>{

    const user = await this.userRepository.findByEmail(loginDto.email);
    if(!user){
      throw new AppError('Email não cadastrado')
    }

    if(! await this.hashProvider.compareHash(loginDto.password, user.password)){
      throw new AppError('Email ou senha inválido')
    }

    const payload = {
      id: user.id,
      name: user.name,
      email: user.email
    }

    return await this.jwtServide.generateToken({payload})

  }
}
