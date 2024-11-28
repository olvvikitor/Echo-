import { CreateFotoDto } from '../dto/create-foto-dto';

export interface IFotoRepository{
  create(createDto:CreateFotoDto):Promise<void>
  findById(id:any): Promise<void>
}