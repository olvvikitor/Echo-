# Echo API - README

## 📚 **Descrição**
A **Echo API** é uma API RESTful desenvolvida como parte do aprendizado de **NestJS**. Ela serve como backend para uma rede social chamada **Echo**, oferecendo funcionalidades como autenticação de usuários, gerenciamento de imagens, sistema de curtidas e comentários. O projeto utiliza **MongoDB** como banco de dados, com o auxílio do **Mongoose** para modelagem.

---

## 🚀 **Funcionalidades**
- **Autenticação JWT**:
  - Registro e login de usuários com tokens JWT para controle de acesso.
- **Armazenamento de Imagens no AWS S3**:
  - Upload de imagens de perfil e postagens diretamente para um bucket S3.
- **Sistema de Curtidas e Comentários**:
  - Reações e comentários em postagens.
- **Gerenciamento de Postagens**:
  - Criar, editar e excluir postagens.
- **Perfil de Usuário**:
  - Atualização de informações do perfil e exibição de dados públicos.
- **Feed de Postagens**:
  - Listagem de postagens recentes ou populares.

---

## 🛠️ **Tecnologias Utilizadas**
- **Linguagem**: TypeScript
- **Framework**: NestJS
- **Banco de Dados**: MongoDB (com Mongoose)
- **Armazenamento**: AWS S3
- **Autenticação**: JWT (JSON Web Token)
- **Bibliotecas Adicionais**:
  - `@nestjs/mongoose` para integração com MongoDB.
  - `@nestjs/jwt` para autenticação.
  - `aws-sdk` para comunicação com o S3.

---

## 🏗️ **Estrutura do Projeto**
```plaintext
src/
├── configs/              # Módulo de configuração
├── modules/             # Módulo de funcionalidades da aplicacao
├── shared/             # Módulo compartilhados
├── app.module.ts/          # Módulo global
├── main.ts/            # main
```

---

## 📖 **Documentação da API**
A documentação pode ser acessada através do Swagger em:
```
http://localhost:<porta>/api
```

### **Endpoints Principais**
#### Autenticação:
- **POST** `/auth/register` - Registro de um novo usuário.
- **POST** `/auth/login` - Login e obtenção de um token JWT.

#### Usuários:
- **GET** `/users/:id` - Obter informações públicas de um usuário.
- **PUT** `/users/me` - Atualizar perfil do usuário autenticado.

#### Postagens:
- **POST** `/posts` - Criar uma nova postagem.
- **GET** `/posts` - Listar todas as postagens.
- **PATCH** `/posts/:id` - Atualizar uma postagem existente.
- **DELETE** `/posts/:id` - Excluir uma postagem.

#### Curtidas e Comentários:
- **POST** `/posts/:id/like` - Curtir ou descurtir uma postagem.
- **POST** `/posts/:id/comments` - Adicionar um comentário.
- **GET** `/posts/:id/comments` - Listar comentários de uma postagem.

---

## ⚙️ **Configuração e Execução**
### **Pré-requisitos**
1. Node.js (>= 16.x)
2. MongoDB (local ou em nuvem)
3. Conta AWS com um bucket S3 configurado

### **Passos**
1. Clone o repositório:
   ```bash
   git clone <url-do-repositorio>
   cd echo-api
   ```
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Configure as variáveis de ambiente:
   Crie um arquivo `.env` na raiz com as seguintes variáveis:
   ```env
   MONGO_URI=<sua-conexao-mongodb>
   JWT_SECRET=<sua-chave-secreta>
   AWS_ACCESS_KEY_ID=<sua-chave-aws>
   AWS_SECRET_ACCESS_KEY=<sua-chave-secreta-aws>
   S3_BUCKET_NAME=<nome-do-bucket>
   ```
4. Inicie o servidor:
   ```bash
   npm run start:dev
   ```

---

## 📦 **Futuras Implementações**
- Sistema de notificações em tempo real (WebSocket).
- Integração com serviços de terceiros para análises de postagens.
- Melhorias na performance e segurança.

---

## 💡 **Contribuição**
Este projeto foi desenvolvido para fins de aprendizado. Contribuições são bem-vindas para melhorar a API e explorar novas funcionalidades!

---
