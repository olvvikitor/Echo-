import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SaveFotoPost } from '../service/save.refs.post';
import { FotoRepository } from '../infra/mongo/repository/foto.repository';
import { FotoModel } from '../infra/mongo/shemas/foto.shema';

@Module({
  imports:[
    MongooseModule.forFeature([{
     name: 'Foto', schema: FotoModel
    }])
  ],
  controllers:[],
  providers:[SaveFotoPost, {provide:'IFotoRepository', useClass:FotoRepository}],
  exports:[SaveFotoPost, 'IFotoRepository']

})
export class FotoModule{

}
