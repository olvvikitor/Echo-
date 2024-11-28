import * as bcrypt from 'bcrypt';
import { InterfaceHashProvider } from '../../entities/providers/bcrypt/InterfaceHashProvider';
import { Injectable } from '@nestjs/common';

@Injectable()
export class BcryptjsProvider implements InterfaceHashProvider{
  async generateHash(payload:string):Promise<string>{
    return await bcrypt.hash(payload, 10)
  }
  async compareHash(password:string, hashedPassword:string):Promise<boolean>{
    return await bcrypt.compare(password, hashedPassword)
  }
}