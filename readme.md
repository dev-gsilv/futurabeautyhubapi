# Futura Beauty Hub

Está é uma API para um marketplace de cosméticos, produtos de beleza e de higiêne. Escrita na linguagem Node.js e no framework Express.js, com banco de dados MongoDB. Aqui, você será capaz de fazer requisições HTTP para:
- Criar usuários;
- Fazer login;
- Cadastrar, listar, editar e remover produtos.

Além disso, esta API registra todas as requisições por meio de um _logger_, indicando data e hora, método HTTP e rota acessada.

Para _criar usuários_, será necessário fornecer: nome, e-mail e senha.

Para _fazer login_, será necessário informar, via autenticação Basic Auth: e-mail e senha.

Para _cadastrar um produto_, serão necessários: nome (string), marca (string), ingredientes (string), indicação (string), volume (string), preço (decimal), disponibilidade (booleano), categoria (string) e imagem do produto (arquivo de imagem).

Para _editar um produto_, é requerido o ID do produto, além do(s) dado(s) a alterar.

Para _remover um produto_, é requerido o ID do mesmo.

***
***

## Instruções de uso
1. Clone o repositório https://github.com/dev-gsilv/futurabeutyhubapi;
2. Execute `npm instal`, via terminal, para instalar todas as dependências;
3. Crie um banco de dados MongoDB gratuito, acessando https://account.mongodb.com/account/login?nds=true;
4. Na raiz do projeto clonado, crie um arquivo de variáveis de ambiente `.env`;
5. Neste arquivo `.env`, insira as seguintes variáveis de ambiente: 
    - `DB_USER`: nome de usuário de seu banco de dados MongoDB;
    - `DB_PASS`: senha de seu banco de dados MongoDB;
    - `DOMINIO_CLUSTER`: nome de domínio do cluster de seu banco de dados MongoDB;
    - `JWT_SECRET`: uma string para configuração do token de acesso JWT.
6. Execute, via terminal, o comando `npm start`.
7. Sua API estará rodando localmente, teste a resposta do servidor [aqui](localhost:3000/healthcheck).
