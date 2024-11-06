import { IUser } from 'src/modules/users/domain/entities/IUser';
import { Reaction } from './reactions/reaction.entity';

export class Post {
  id: string;
  content: string;
  author!: IUser;
  comments: string[];
  reactions: Reaction[];

  constructor(
    id: string = '', // Se não fornecido, 'id' será uma string vazia
    content: string = '', // Se não fornecido, 'content' será uma string vazia
    author: IUser, // 'author' deve ser fornecido
    comments: string[] = [], // 'comments' é inicializado como um array vazio
    reactions: Reaction[] = [] // 'reactions' é inicializado como um array vazio
  ) {
    this.id = id;
    this.content = content;
    this.author = author; // Autor é obrigatório e deve ser passado no construtor
    this.comments = comments; // Array de comentários opcional
    this.reactions = reactions; // Array de reações opcional
  }
}
