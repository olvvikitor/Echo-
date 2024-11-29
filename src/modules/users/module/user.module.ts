import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModel } from '../infra/mongo/schemas/user';
import { UserRepository } from '../infra/mongo/repositories/user.repository';
import { UserServices } from '../services/user.service';
import { UserControllers } from '../infra/controllers/user.controller';
import { ProvidersModule } from 'src/shared/providers/modules/providers.module';
import { LoginUserService } from '../services/user.login.service';
import { LoginUserControllers } from '../infra/controllers/user.login.controller';
import { PostModule } from 'src/modules/post/module/post.module';

@Module({
  imports:[
    MongooseModule.forFeature([{
      name:'User', schema: UserModel
    }]),
    ProvidersModule,
    PostModule
  ],
  controllers:[UserControllers, LoginUserControllers],
  providers:[
    {provide: 'InterfaceUserRepository', useClass: UserRepository},
    UserServices,
    LoginUserService,
  ],
  exports:[
    {provide: 'InterfaceUserRepository', useClass: UserRepository},

  ]
})
export class UserModule{}