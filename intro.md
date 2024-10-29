Aqui vai um detalhamento do planejamento para a sua rede social.

---

### 1. Funcionalidades do Projeto

#### Funcionalidades Principais
1. **Cadastro e Login de Usuários**
   - **Registro**: Os usuários podem criar uma conta com nome, email e senha.
   - **Login**: Autenticação via JWT.
   - **Recuperação de Senha**: Opção de recuperação de senha por email.

2. **Criação de Posts**
   - **Postar Conteúdo**: Usuários podem criar posts com textos e (opcionalmente) imagens.
   - **Editar e Excluir Posts**: Opção para editar ou remover posts próprios.

3. **Reações**
   - **Reações Positivas e Negativas**: Botões para reagir positivamente ou negativamente aos posts.
   - **Restrição de Reações**: Cada usuário pode reagir apenas uma vez em cada post (com a possibilidade de alterar a reação).
   - **Contador de Reações**: Exibição do número de reações positivas e negativas.

4. **Sistema de Comentários**
   - **Adicionar Comentários**: Usuários podem comentar em posts.
   - **Editar e Excluir Comentários**: Usuários podem gerenciar seus próprios comentários.
   - **Reações em Comentários** (opcional): Permitir reações aos comentários (positiva e negativa).

5. **Moderação de Conteúdo**
   - **Sistema de Denúncia**: Usuários podem denunciar posts e comentários abusivos.
   - **Função de Moderador**: Moderadores revisam posts e comentários denunciados.
   - **Limite de Reações Negativas**: Reações negativas em excesso disparam alertas para moderação.

6. **Sistema de Pontuação**
   - **Pontuação Positiva**: Usuários ganham pontos por interações construtivas.
   - **Penalização por Comportamento Negativo**: Pontuação reduzida para usuários que abusam de reações negativas.

7. **Notificações**
   - **Notificações em Tempo Real**: Avisos para novos comentários, reações ou denúncias nos posts do usuário.
   - **Configuração de Notificações**: Usuários podem escolher o tipo de notificações que desejam receber.

#### Funcionalidades Secundárias
1. **Feed Personalizado**
   - Algoritmo de recomendação baseado nas interações e interesses do usuário.
   - Filtros para mostrar posts mais positivos, negativos ou neutros.

2. **Perfil do Usuário**
   - **Perfil Personalizado**: Exibição de informações como pontuação, posts e histórico de reações.
   - **Configurações de Conta**: Opções de privacidade e configurações do perfil.

3. **Gamificação**
   - **Badges e Conquistas**: Troféus por comportamento positivo, participação ou engajamento.
   - **Ranking de Usuários**: Classificação com base na pontuação total ou outras métricas.

---

### 2. Modelagem do Banco de Dados

Para implementar as funcionalidades, você pode começar com estas entidades principais:

- **Usuário**
  - `id`: UUID
  - `nome`: string
  - `email`: string (único)
  - `senha`: string (hash)
  - `pontuacao`: number
  - `data_criacao`: Date
  - `papel`: string (ex.: “usuário”, “moderador”)

- **Post**
  - `id`: UUID
  - `conteudo`: string
  - `autor_id`: UUID (relacionamento com Usuário)
  - `data_criacao`: Date
  - `status`: string (ex.: “ativo”, “denunciado”)

- **Reação**
  - `id`: UUID
  - `tipo`: string (ex.: “positiva”, “negativa”)
  - `post_id`: UUID (relacionamento com Post)
  - `autor_id`: UUID (relacionamento com Usuário)
  - `data_criacao`: Date

- **Comentário**
  - `id`: UUID
  - `conteudo`: string
  - `post_id`: UUID (relacionamento com Post)
  - `autor_id`: UUID (relacionamento com Usuário)
  - `data_criacao`: Date
  - `status`: string (ex.: “ativo”, “denunciado”)

- **Notificação**
  - `id`: UUID
  - `usuario_id`: UUID (relacionamento com Usuário)
  - `tipo`: string (ex.: “comentário”, “reação”, “denúncia”)
  - `referencia_id`: UUID (pode apontar para Post ou Comentário)
  - `data_criacao`: Date
  - `lida`: boolean

- **Denúncia**
  - `id`: UUID
  - `tipo`: string (ex.: “post”, “comentário”)
  - `referencia_id`: UUID (ID do post ou comentário)
  - `autor_id`: UUID (usuário que fez a denúncia)
  - `status`: string (ex.: “pendente”, “analisada”)
  - `data_criacao`: Date

---

### 3. Escolha das Tecnologias

- **Backend**: NestJS
  - **Motivo**: Estrutura modular e robusta, ideal para projetos que crescerão e demandam organização e escalabilidade.
- **Banco de Dados**: 
  - **MongoDB** (se quiser flexibilidade de dados e escalabilidade horizontal).
  - **PostgreSQL** (se preferir dados relacionais e mais segurança em transações complexas).
- **Frontend**: 
  - **Vue.js** (ótimo para interfaces interativas e reativas) ou 
  - **React** (popular, com grande comunidade e flexibilidade de uso).
- **Autenticação**: JWT (JSON Web Token)
- **Notificações em Tempo Real**: WebSockets com NestJS e/ou Redis para armazenamento temporário de notificações em tempo real.

---

### Próximos Passos

Agora que você tem uma ideia das funcionalidades e da estrutura básica do banco de dados, o próximo passo é configurar o ambiente de desenvolvimento para começar a codificar o backend e criar os endpoints principais!
