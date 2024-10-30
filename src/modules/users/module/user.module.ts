import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModel } from '../infra/mongo/schemas/user';
import { UserRepository } from '../infra/mongo/repositories/user.repository';
import { UserServices } from '../services/user.service';
import { UserControllers } from '../infra/controllers/user.controller';
import { ProvidersModule } from 'src/shared/providers/modules/providers.module';

@Module({
  imports:[
    MongooseModule.forFeature([{
      name:'User', schema: UserModel
    }]),
    ProvidersModule

  ],
  controllers:[UserControllers],
  providers:[
    {provide: 'InterfaceUserRepository', useClass: UserRepository},
    UserServices
  ]
})
export class UserModule{}