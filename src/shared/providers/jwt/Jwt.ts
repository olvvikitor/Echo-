import { JwtService } from '@nestjs/jwt';
import { InterfaceTokenProvider } from '../../entities/providers/token/interface.token.provider';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class JwtProvider implements InterfaceTokenProvider{
  constructor(private jwtService : JwtService, private configService:ConfigService){}
  async generateToken(payload: object):Promise<string>{
    return  this.jwtService.sign(payload)
  }
  async verifyToken(token: string): Promise<any>{
   return await this.jwtService.verifyAsync(token,
      {
        secret: this.configService.get<string>('JWT_SECRET')
      }
    )
  }
}