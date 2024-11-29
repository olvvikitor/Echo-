import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/modules/users/domain/entities/User';
import { InterfaceUserRepository } from 'src/modules/users/domain/repositories/interface.user.repository';

export class UserRepository implements InterfaceUserRepository{
  constructor(
    @InjectModel('User') private model: Model<User>
  ){}
  async findByEmail(email: string): Promise<User | null> {
   return await this.model.findOne({email: email})
  }

  async findById(id: string): Promise<User | null> {
    return await this.model.findOne({ id:id })
  }

  async create(user: User): Promise<User> {
    const newUser = await this.model.create(user);
    await newUser.save()
    return newUser
  }
  
}