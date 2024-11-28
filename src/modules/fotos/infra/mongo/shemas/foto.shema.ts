import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Foto } from 'src/modules/fotos/domain/entities/foto';

@Schema()
class FotoShema implements Omit<Foto, 'id'>{
  @Prop({type:String, isRequired: true})
  path!: string;
  @Prop({type:String, isRequired: true})
  url!: string;
}
export const FotoModel = SchemaFactory.createForClass(FotoShema)