import { Module,forwardRef  } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PostModel } from '../infra/mongo/schemas/post';
import { PostRepository } from '../infra/mongo/repository/post.repository';
import { ProvidersModule } from 'src/shared/providers/modules/providers.module';
import { PostService } from '../services/post.service';
import { UserModule } from 'src/modules/users/module/user.module';
import { PostController } from '../infra/controllers/post.controller';
import { StorageModule } from 'src/shared/providers/storage/storage.module';
import { FotoModule } from 'src/modules/fotos/module/foto.modele';

@Module({
  imports:[
    MongooseModule.forFeature([{
      name: 'Post', schema: PostModel
    }]),
    ProvidersModule,
    forwardRef(()=>UserModule),
    StorageModule,
    FotoModule
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