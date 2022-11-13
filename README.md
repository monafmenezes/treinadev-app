<h1 align="center">
    <a href="https://treinadev-app.vercel.app/">🔗 Treinadev</a>
</h1>
<h3 align="center">
    <a href="https://treinadev-app.herokuapp.com/api-docs/">🔗 Documentação da Api</a>
</h3>
<p align="center">🚀 Pagina web de cursos que cria cursos, módulos e aulas e mostra para o usuário.</p>

Usuário Adminstrador para teste: 
username: admintreinadev
senha: 12345678

### 🎲 Rodando o Frontend(React.js)

```bash
# Clone este repositório
$ git clone <git@github.com:monafmenezes/treinadev-app.git>

# Acesse a pasta do projeto no terminal
$ cd treinadev-app

# Acesse a pasta client no terminal
$ cd client

# Instale as dependências
$ yarn

# Execute a aplicação em modo de desenvolvimento
$ yarn start

# O servidor inciará na porta:3000 - acesse <http://localhost:3000>
```

### 🎲 Rodando o Backend(Node.js)

```bash
# Clone este repositório

# Acesse a pasta do projeto no terminal
$ cd treinadev-app

# Acesse a pasta client no terminal
$ cd api

# Instale as dependências
$ yarn

# Crie a imagem do banco de dados do docker (postgres)
$ docker compose up

# Gere as migrações 
$ yarn typeorm migration:run -d src/data-source.ts

# Execute a aplicação em modo de desenvolvimento
$ yarn dev

# O servidor inciará na porta:8000 - acesse <http://localhost:8000>
```
### ✅ Autor
<img style="border-radius: 50%;" src="https://github.com/monafmenezes.png" width="100px;" alt=""/>

Feito por Monalisa Menezes, entre em contato!
<div>
<a href = "mailto:psimonafmenezes@gmail.com"><img src="https://img.shields.io/badge/-Gmail-%23333?style=for-the-badge&logo=gmail&logoColor=white" target="_blank"></a>
    <a href="https://www.linkedin.com/in/monalisafmenezes" target="_blank"><img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank"></a> 
    <a href="https://twitter.com/monafmenezes" target="_blank"><img src="https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white" target="_blank"></a> 
 </div>
