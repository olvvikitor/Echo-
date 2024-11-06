import { Reaction } from '../domain/entities/reaction.entity';
import { UpdateReactionDto } from '../domain/entities/reaction.entity copy';
import { Body, Controller, Inject, Injectable, Param, Put, Req, UnauthorizedException, UseGuards } from '@nestjs/common';
import { ReactionService } from '../services/reactions.service';
import { AuthGuard } from 'src/shared/middleweres/auth.guard';

@Injectable()
@UseGuards(AuthGuard)
@Controller('react')
export class ReactionController{
  private reactionService : ReactionService;
  constructor(
    @Inject()
    reactionService : ReactionService) {
    this.reactionService = reactionService
  }

  @Put('/:id')
  async reagir(@Param('id')id:string,@Body()reaction :UpdateReactionDto, @Req() request: any){

    if(!request.user){
      throw new UnauthorizedException('Token inválido ou expirado')
    }
    
    const idUser : string = request.user.payload.id

    const newReaction: Reaction = {
      data : new Date(),
      id_post : id,
      id_user : idUser,
      type: reaction.type
    }

    return await this.reactionService.updateReaction(id, newReaction)
  }
}