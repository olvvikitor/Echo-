import { Module } from '@nestjs/common';
import { BcryptjsProvider } from '../bcryptjs/Bcrypt';

@Module({
  providers:[
    {provide:'InterfaceHashProvider', useClass: BcryptjsProvider}
  ],
  exports:[
    {provide:'InterfaceHashProvider', useClass: BcryptjsProvider}

  ]
})
export class ProvidersModule{
}