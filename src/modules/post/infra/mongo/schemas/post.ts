import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types } from 'mongoose';
import { Post } from 'src/modules/post/domain/entities/Post';
import { Reaction } from 'src/modules/reaction/domain/entities/reaction.entity';
import { User } from 'src/modules/users/domain/entities/User';
import { v4 } from 'uuid';

@Schema()
class PostSchemas extends Post {
  @Prop({type: Types.UUID, required: false, default: ()=>v4()})
  id!: string;
  @Prop({type: Types.UUID, required: true})
  author!: User;
  @Prop({type: [String], required: false})
  comments!: string[];
  @Prop({ type: String, required: true })
  content!: string;
  @Prop({ type: [Reaction], required: false })
  reactions!: Reaction[];

}
export const PostModel = SchemaFactory.createForClass(PostSchemas)