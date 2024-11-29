import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { MongoConfigConnection } from './configs/mongo/mongo.config';
import { UserModule } from './modules/users/module/user.module';
import { ProvidersModule } from './shared/providers/modules/providers.module';
import { PostModule } from './modules/post/module/post.module';
import { ReactionModule } from './modules/reaction/module/reaction.module';
import { StorageModule } from './shared/providers/storage/storage.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal:true
    }),
    MongooseModule.forRootAsync({
      useClass:MongoConfigConnection
    }),
    UserModule,
    PostModule,
    ReactionModule,
    
  ],
  providers: [MongoConfigConnection],
  
})
export class AppModule {}
