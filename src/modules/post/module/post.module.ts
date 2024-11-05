import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PostModel } from '../infra/mongo/schemas/post';
import { PostRepository } from '../infra/mongo/repository/post.repository';
import { PostController } from '../controllers/post.controller';
import { ProvidersModule } from 'src/shared/providers/modules/providers.module';
import { PostService } from '../services/post.service';

@Module({
  imports:[
    MongooseModule.forFeature([{
      name: 'Post', schema: PostModel
    }]),
    ProvidersModule,
  ],
  controllers:[PostController],
  providers:[
    {provide: 'InterfacePostRepository', useClass: PostRepository},
    PostService
  ],
  exports:[
    PostService
  ]
})
export class PostModule{}