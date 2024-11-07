import { Module } from '@nestjs/common';
import { PostModule } from 'src/modules/post/module/post.module';
import { UserModule } from 'src/modules/users/module/user.module';
import { ProvidersModule } from 'src/shared/providers/modules/providers.module';
import { ReactionService } from '../services/reactions.service';
import { ReactionController } from '../controller/reaction.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ReactionModel } from '../infra/mongo/schemas/reaction';
import { ReactionRepository } from '../infra/mongo/repositories/reaction.repository';

@Module({
  imports: [
    MongooseModule.forFeature([{
      name:'Reaction', schema: ReactionModel
    }]),
    PostModule,
    UserModule,
    ProvidersModule,

  ],
  controllers:[
    ReactionController
  ],
  providers:[
    ReactionService,
    {provide: 'InterfaceReactionRepository', useClass: ReactionRepository}
  ],
  exports:[
    {provide: 'InterfaceReactionRepository', useClass: ReactionRepository}

  ]
})
export class ReactionModule{

}