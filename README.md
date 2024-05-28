<div align="center">

# Projeto de Autenticação de Usuário

</div>

Este projeto é uma aplicação front-end desenvolvida em React com TypeScript e Vite, que fornece funcionalidades de login e registro de usuários. Ele se conecta a um back-end desenvolvido em Python com FastAPI para autenticar usuários e gerenciar suas informações.

## Requisitos

Antes de iniciar, certifique-se de ter instalado:

- Node.js
- npm (ou yarn)

## Instalação

1. Clone este repositório:
git clone https://github.com/saviotrindade/user-authentication-frontend

2. Navegue até o diretório do projeto:
cd auth

3. Instale as dependências do front-end:
npm install 
ou 
yarn

4. Configure e inicie o servidor back-end. Consulte o README do back-end para mais detalhes.

5. Inicie o servidor de desenvolvimento do front-end:
npm run dev
ou
yarn dev

6. Acesse a aplicação em seu navegador em `http://localhost:5173`.

## Configuração
Para configurar a conexão com o back-end, defina as variáveis de ambiente necessárias no arquivo `.env`. Um exemplo de variável de ambiente para a URL do back-end:

## Funcionalidades

- **Login**: Os usuários podem fazer login usando seu e-mail e senha.
- **Registro**: Os usuários podem criar uma nova conta fornecendo seu nome, e-mail e senha, data de nascimento e gênero.
- **Recuperação de senha**: Ainda não disponivel.

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).