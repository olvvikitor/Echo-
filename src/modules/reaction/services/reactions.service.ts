import { Injectable, Inject, NotFoundException } from '@nestjs/common';
import { InterfacePostRepository } from 'src/modules/post/domain/repositories/InterfacePostRepository';
import { InterfaceUserRepository } from 'src/modules/users/domain/repositories/interface.user.repository';
import { Reaction } from '../domain/entities/reaction.entity';

@Injectable()
export class ReactionService {
  constructor(
    @Inject('InterfacePostRepository')
    private postRepository: InterfacePostRepository,
    @Inject('InterfaceUserRepository')
    private userRepository: InterfaceUserRepository,

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
        post.reactions.splice(index, 1)
      }
      //se for diferente, substitui 
      else {
        post.reactions[index] = reaction
      }
    }
    //persistindo a nova reação 
    else {
      post.reactions.push(reaction)
    }
    //salvando
    await this.postRepository.update(post.id, post);
  }

}