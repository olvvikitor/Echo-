import { Reaction } from 'src/modules/reaction/domain/entities/reaction.entity';
import { User } from 'src/modules/users/domain/entities/User';

export class Post {
  id: string;
  content: string;
  author!: User;
  comments: string[];
  reactions: Reaction[];

  constructor(
    id: string = '', // Se não fornecido, 'id' será uma string vazia
    content: string = '', // Se não fornecido, 'content' será uma string vazia
    author: User, // 'author' deve ser fornecido
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
