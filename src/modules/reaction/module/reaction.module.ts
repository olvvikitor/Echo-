import { Module } from '@nestjs/common';
import { PostModule } from 'src/modules/post/module/post.module';
import { UserModule } from 'src/modules/users/module/user.module';
import { ProvidersModule } from 'src/shared/providers/modules/providers.module';
import { ReactionService } from '../services/reactions.service';
import { ReactionController } from '../controller/reaction.controller';

@Module({
  imports: [
    PostModule,
    UserModule,
    ProvidersModule
  ],
  controllers:[
    ReactionController
  ],
  providers:[
    ReactionService
  ]
})
export class ReactionModule{

}