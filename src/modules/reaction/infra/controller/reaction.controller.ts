
import { Body, Controller, Inject, Injectable, Param, Put, Req, UnauthorizedException, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/shared/middleweres/auth.guard';
import { UpdateReactionDto } from '../../domain/dtos/reaction-update-dto';
import { Reaction } from '../../domain/entities/reaction.entity';
import { ReactionService } from '../../services/reactions.service';

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

    const newReaction: Reaction = new Reaction(id, idUser, new Date(), reaction.type)
     
    return await this.reactionService.updateReaction(id, newReaction)
  }
}