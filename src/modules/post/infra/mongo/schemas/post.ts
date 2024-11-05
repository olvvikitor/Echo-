import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types } from 'mongoose';
import { Post } from 'src/modules/post/domain/entities/Post';
import { Reaction } from 'src/modules/post/domain/entities/reaction.entity';
import { IUser } from 'src/modules/users/domain/entities/IUser';
import { v4 } from 'uuid';

@Schema()
class PostSchemas extends Post {
  @Prop({type: Types.UUID, required: false, default: ()=>v4()})
  id: string;
  @Prop({type: Types.UUID, required: true, ref: 'User'})
  author: IUser;
  @Prop({type: [String], required: false})
  comments: string[];
  @Prop({ type: String, required: true })
  content: string;
  @Prop({ type: [Reaction], required: false, ref: 'User' })
  reactions: Reaction[];

}
export const PostModel = SchemaFactory.createForClass(PostSchemas)