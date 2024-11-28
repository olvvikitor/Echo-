import { Injectable } from '@nestjs/common';
import { MulterModuleOptions, MulterOptionsFactory } from '@nestjs/platform-express';
import { MulterOptions } from '@nestjs/platform-express/multer/interfaces/multer-options.interface';
import multer, { diskStorage } from 'multer';
import { editFileName } from 'src/configs/file/util.file';
import { IStorageProvider } from 'src/shared/entities/providers/storage/IStorageProvider';

@Injectable()
export class DiskProvider implements IStorageProvider{


  async create():Promise<MulterModuleOptions>{
    return{
      storage: diskStorage({
        destination:'./uploads',
        filename: editFileName
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