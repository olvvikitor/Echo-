import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';
import { IUser } from 'src/modules/users/domain/entities/IUser';
import { v4 } from 'uuid';


@Schema()
class UserSchema implements IUser {
  @Prop({type: Types.UUID, require: false, default: ()=> v4()})
  id!: string;
  @Prop({ type: String, required: true })
  email!: string;
  @Prop({ type: String, required: true })
  password!: string;
}
export const UserModel = SchemaFactory.createForClass(UserSchema)
