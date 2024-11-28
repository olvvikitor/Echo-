import { IsArray, IsNotEmpty, IsObject, IsString, IsUUID } from 'class-validator';
import { Foto } from 'src/modules/fotos/domain/entities/foto';
import { Reaction } from 'src/modules/reaction/domain/entities/reaction.entity';
import { ViewUserDto } from 'src/modules/users/domain/entities/dtos/view-user-dto';
import { User } from 'src/modules/users/domain/entities/User';
import { v4 } from 'uuid';

export class Post {

  @IsUUID()
  @IsNotEmpty()
  id = v4();

  @IsString()
  @IsNotEmpty()
  content: string;

  @IsObject()
  @IsNotEmpty()
  author: ViewUserDto;

  @IsArray()
  comments: string[] = [];

  @IsArray()
  reactions: Reaction[] = [];

  @IsArray()
  photos: Foto[] = []

  constructor(
    content: string = '', 
    author: ViewUserDto, 

  ) {
    this.content = content;
    this.author = author; // Autor é obrigatório e deve ser passado no construtor

  }
}
