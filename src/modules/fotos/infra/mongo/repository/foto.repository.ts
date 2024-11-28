import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateFotoDto } from 'src/modules/fotos/domain/dto/create-foto-dto';
import { Foto } from 'src/modules/fotos/domain/entities/foto';
import { IFotoRepository } from 'src/modules/fotos/domain/repository/IFotoRepository';

export class FotoRepository implements IFotoRepository{

  constructor (@InjectModel('Foto') private model:Model<Foto>) {

  }

 async create(createDto: CreateFotoDto): Promise<void> {
    const fotoSaved = await this.model.create(createDto)
    await fotoSaved.save()
  }
  findById(id: any): Promise<void> {
    throw new Error('Method not implemented.');
  }
  
}