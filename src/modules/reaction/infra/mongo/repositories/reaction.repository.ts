import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Reaction } from 'src/modules/reaction/domain/entities/reaction.entity';
import { InterfaceReactionRepository } from 'src/modules/reaction/domain/repositories/InterfaceReactionRepository';

@Injectable()
export class ReactionRepository implements InterfaceReactionRepository{

  constructor(
    @InjectModel('Reaction')
    private model : Model<Reaction>
  ){}
  async remove(id: string): Promise<void> {
    await this.model.deleteOne({id: id})
    
  }

  async create(reaction: Reaction): Promise<void> {
    const newReaction = await this.model.create(reaction)
    await newReaction.save()
    
  }
  findAll(reaction: Reaction): Promise<void> {
    throw new Error('Method not implemented.');
  }
  async update(id: string, reaction: Reaction): Promise<void> {
    await this.model.updateOne({id: id}, reaction)
  }
  findById(id: string): Promise<Reaction> {
    throw new Error('Method not implemented.');
  }
  
}