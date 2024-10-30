import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { MongoConfigConnection } from './configs/mongo/mongo.config';
import { UserModule } from './modules/users/module/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal:true
    }),
    MongooseModule.forRootAsync({
      useClass:MongoConfigConnection
    }),
    UserModule
  ],
  providers: [MongoConfigConnection],
})
export class AppModule {}
