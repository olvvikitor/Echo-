import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IUser } from 'src/modules/users/domain/entities/IUser';
import { InterfaceUserRepository } from 'src/modules/users/domain/repositories/interface.user.repository';

export class UserRepository implements InterfaceUserRepository{
  constructor(
    @InjectModel('User') private model: Model<IUser>
  ){}
  async findByEmail(email: string): Promise<IUser | null> {
   return await this.model.findOne({email: email})
  }

  async findById(id: string): Promise<IUser | null> {
    return await this.model.findOne({ id:id })
  }

  async create(user: IUser): Promise<IUser> {
    const newUser = await this.model.create(user);
    await newUser.save()
    return newUser
  }
  
}