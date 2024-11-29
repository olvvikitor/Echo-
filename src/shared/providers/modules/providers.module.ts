import { Global, Module } from '@nestjs/common';
import { BcryptjsProvider } from '../bcryptjs/Bcrypt';
import { JwtModuleProvider } from '../jwt/jwt.module';
import { JwtModule } from '@nestjs/jwt';
import { JwtProvider } from '../jwt/Jwt';


@Global()
@Module({
  imports:[
    JwtModuleProvider
  ],
  providers:[
    {provide:'InterfaceHashProvider', useClass: BcryptjsProvider},
    {provide:'InterfaceTokenProvider', useClass: JwtProvider}


  ],
  exports:[
    {provide:'InterfaceHashProvider', useClass: BcryptjsProvider},
    {provide:'InterfaceTokenProvider', useClass: JwtProvider}
  ]
})
export class ProvidersModule{
}