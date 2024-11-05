import { Module,forwardRef  } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PostModel } from '../infra/mongo/schemas/post';
import { PostRepository } from '../infra/mongo/repository/post.repository';
import { PostController } from '../controllers/post.controller';
import { ProvidersModule } from 'src/shared/providers/modules/providers.module';
import { PostService } from '../services/post.service';
import { UserModule } from 'src/modules/users/module/user.module';

@Module({
  imports:[
    MongooseModule.forFeature([{
      name: 'Post', schema: PostModel
    }]),
    ProvidersModule,
    forwardRef(()=>UserModule)
    
  ],
  controllers:[PostController],
  providers:[
    {provide: 'InterfacePostRepository', useClass: PostRepository},
    PostService
  ],
  exports:[
    PostService,
    {provide: 'InterfacePostRepository', useClass: PostRepository},

  ]
})
export class PostModule{}