import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types } from 'mongoose';
import { Reaction } from 'src/modules/reaction/domain/entities/reaction.entity';
import { v4 } from 'uuid';

@Schema()
class ReactionSchema implements Reaction{
  @Prop({type: String, required: true})
  id!:string
  @Prop({type: String, required: true})
  id_post!: string;
  @Prop({type: String, required: true})
  id_user!: string;
  @Prop({type: Date, required: true})
  data!: Date;
  @Prop({type: String, required: true})
  type!: 'negative' | 'positive';
}
export const ReactionModel = SchemaFactory.createForClass(ReactionSchema)