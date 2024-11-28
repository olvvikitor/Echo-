import { IStorageProvider } from 'src/shared/entities/providers/storage/IStorageProvider';
import { S3 } from '@aws-sdk/client-s3';
import { MulterOptions } from '@nestjs/platform-express/multer/interfaces/multer-options.interface';
import * as multers3 from  'multer-s3'
import { editFileName, getType } from 'src/configs/file/util.file';
import { Injectable } from '@nestjs/common';

@Injectable()
export class S3Provider implements IStorageProvider{
  private s3 : S3;
  constructor(){
    this.s3 = new S3({
      region:'us-east-1'
    })
  }
  async create():Promise<MulterOptions>{
    return {
      storage: multers3({
        s3: this.s3,
        contentDisposition:'inline',
        contentType: getType,
        bucket: 'echo-a',
        acl:'public-read',
        key: editFileName
      })
    }
  }
  getFile(): Promise<any> {
    throw new Error('Method not implemented.');
  }
  delete(): Promise<void> {
    throw new Error('Method not implemented.');
  }
  
}