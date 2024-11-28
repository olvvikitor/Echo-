import { Inject, Injectable } from '@nestjs/common';
import { IFotoRepository } from '../domain/repository/IFotoRepository';
import { CreateFotoDto } from '../domain/dto/create-foto-dto';

@Injectable()
export class SaveFotoPost{
  constructor (@Inject('IFotoRepository') private fotoRepository:IFotoRepository) {
  }
  async execute(createFotoDto : CreateFotoDto):Promise<void>{
    await this.fotoRepository.create(createFotoDto)
  }

}