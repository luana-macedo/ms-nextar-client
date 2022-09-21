# Nextar user client

Esta aplicação é um um client de gerenciamento de Usuários com acesso restrito mediante autenticação. Temos dois níveis de acesso de usuário: user e admin
O usuário ‘“user” poderá apenas consultar informações e editar seu próprio perfil
O usuário admin poderá consultar informações e cadastrar/editar todos usuários
Etapas para rodar localmente
Você precisará de: 
Nodejs instalado,
está com api ms-nextar-api rodando 
repositório ms-nextar-client clonado 
prompt de comando e navegador

Siga os comando a baixo para rodar o projeto localmente:
no prompt de comando:
npm install
npm run serve
Abra o navegador no endereço que aparecerá na linha de comando;
Para logar como admin:
email: admin@email.com
senha: Lu159753

para logar como usuário:
    "password": "Us159753",
    "email": "user@email.com"
