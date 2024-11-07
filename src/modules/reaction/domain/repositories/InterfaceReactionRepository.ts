import { Reaction } from '../entities/reaction.entity';

export interface InterfaceReactionRepository{
  create(reaction: Reaction):Promise<void>
  findAll(reaction: Reaction):Promise<void>
  update(id:string, reaction : Reaction):Promise<void>
  findById(id:string):Promise<Reaction>
  remove(id:string):Promise<void>
}