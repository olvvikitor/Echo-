import { Global, Module } from '@nestjs/common';
import { S3Provider } from './s3Storage/S3';
import { MulterModule } from '@nestjs/platform-express';
import { StorageFactory } from './storage.factory';
import { DiskProvider } from './diskStorage/disk';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Global()
@Module({
  imports:[
    MulterModule.registerAsync({
      imports:[ConfigModule],
      useFactory: async  (configService:ConfigService, s3Provider:S3Provider, diskProvider:DiskProvider)=>{
      return   new StorageFactory(configService, s3Provider, diskProvider).createStorageProvider().create()
      },
      inject:[ConfigService, S3Provider, DiskProvider]
    }),
  ],
  providers:[
    DiskProvider,
    S3Provider,
    {
      provide: 'IStorageProvider', useFactory:(configService:ConfigService, s3Provider:S3Provider, diskProvider:DiskProvider)=>{
        return  new StorageFactory(configService, s3Provider, diskProvider).createStorageProvider()
      },
      inject:[ConfigService, S3Provider, DiskProvider]
    },
  ],
  exports:['IStorageProvider', DiskProvider, S3Provider, MulterModule]
})
export class StorageModule{}