import { ConfigService } from '@nestjs/config';
import { S3Provider } from './s3Storage/S3';
import { DiskProvider } from './diskStorage/disk';
import { IStorageProvider } from 'src/shared/entities/providers/storage/IStorageProvider';
import { Injectable } from '@nestjs/common';

@Injectable()
export class StorageFactory{
  constructor (
    private configService:ConfigService,
    private s3StorageProvider:S3Provider,
    private diskStorageProvider: DiskProvider
  ) {}
  
  createStorageProvider():IStorageProvider{

    if(this.configService.get('enviroment')==='dev'){
      return  this.diskStorageProvider;
    }
    return  this.s3StorageProvider
  }
}