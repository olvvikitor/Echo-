import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types } from 'mongoose';
import { Foto } from 'src/modules/fotos/domain/entities/foto';
import { Post } from 'src/modules/post/domain/entities/Post';
import { Reaction } from 'src/modules/reaction/domain/entities/reaction.entity';
import { User } from 'src/modules/users/domain/entities/User';
import { v4 } from 'uuid';

@Schema()
class PostSchemas{
  
  @Prop({type: Types.ObjectId, ref:'User' ,required: true})
  id_author!: Types.ObjectId;
  @Prop({type: [String], required: false})
  comments!: string[];
  @Prop({ type: String, required: true })
  content!: string;
  @Prop({ type: [Reaction], required: false })
  reactions!: Reaction[];
  @Prop({type: [Foto]})
  photos: Foto[];
  
}
export const PostModel = SchemaFactory.createForClass(PostSchemas)