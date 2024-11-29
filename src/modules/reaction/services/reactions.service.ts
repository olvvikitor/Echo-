import { Injectable, Inject, NotFoundException } from '@nestjs/common';
import { InterfacePostRepository } from 'src/modules/post/domain/repositories/InterfacePostRepository';
import { InterfaceUserRepository } from 'src/modules/users/domain/repositories/interface.user.repository';
import { Reaction } from '../domain/entities/reaction.entity';
import { InterfaceReactionRepository } from '../domain/repositories/InterfaceReactionRepository';

@Injectable()
export class ReactionService {
  constructor(
    @Inject('InterfacePostRepository')
    private postRepository: InterfacePostRepository,
    @Inject('InterfaceUserRepository')
    private userRepository: InterfaceUserRepository,
    @Inject('InterfaceReactionRepository')
    private reactionRepository : InterfaceReactionRepository

  ) { }

  async updateReaction(idPost: string, reaction: Reaction): Promise<void> {

    const post = await this.postRepository.findById(idPost);

    if (!post) {
      throw new NotFoundException
    }
    const user = await this.userRepository.findById(reaction.id_user)
    if (!user) {
      throw new NotFoundException
    }

    //checar se ja existe uma reação do usuario com o post escolhido
    const index = post.reactions.findIndex(x => x.id_user === reaction.id_user)

    //se for uma reação duplicada, remove a reacao
    if (index !== -1) {
      if (post.reactions[index].type === reaction.type) {
        await this.reactionRepository.remove(post.reactions[index].id)
        console.log(post.reactions[index].id)
        post.reactions.splice(index, 1)
      }
      //se for diferente, substitui 
      else {
        await this.reactionRepository.update(post.reactions[index].id, reaction)
        post.reactions[index] = reaction
        console.log(post.reactions[index].id)

      }
    }
    //persistindo a nova reação 
    else {
      post.reactions.push(reaction)
      await this.reactionRepository.create(reaction);

    }

    //salvando
    await this.postRepository.update(post.id, post);

  }

}