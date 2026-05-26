# 🔐 Sistema de Login (Terminal)

Um sistema de autenticação desenvolvido em Node.js com integração ao MySQL, executado diretamente pelo terminal.

---

# 🎮 Sobre o Projeto

O projeto consiste em um sistema de autenticação completo via terminal, permitindo:

- Criar usuários 👤
- Realizar login 🔑
- Deletar usuários 🗑️
- Validar credenciais ✅
- Criptografar senhas com bcrypt 🔒

O sistema foi desenvolvido com foco em:

- Prática de backend com Node.js
- Integração com MySQL
- Segurança de senhas
- Modularização de código
- Arquitetura organizada
- Manipulação de queries SQL

---

# 🚀 Funcionalidades

- 👤 Cadastro de usuários
- 🔑 Sistema de login
- 🔒 Criptografia de senha com bcrypt
- 🗑️ Remoção de usuários por ID
- 📋 Listagem de usuários cadastrados
- ✅ Validação de login e senha
- ❌ Tratamento de credenciais inválidas
- 🎨 Interface organizada no terminal
- ⏸️ Sistema de pause e fluxo controlado
- 🛠️ Integração real com MySQL

---

# 🎮 Menu do Sistema

```txt
1. Criar usuário. ➕
2. Fazer login. 👤
3. Deletar usuário. 🗑️
0. Sair. ❌
```

---

# 👤 Cadastro de Usuário

```txt
👤 - Insira o seu nome:
📩 - Insira seu email:
🔑 - Insira sua senha:
```

Após o cadastro:

```txt
Cadastro criado com sucesso! ✅
🆔 = 14
```

---

# 🔑 Sistema de Login

O login é realizado utilizando:

- email
- senha

Exemplo:

```txt
📩 - Insira o email:
🔑 - Insira a senha:
```

---

# ✅ Login Correto

```txt
Logado com sucesso! ✅
```

---

# ❌ Login Inválido

```txt
Senha incorreta! 🚫
```

---

# 🗑️ Sistema de Exclusão

O sistema exibe os usuários cadastrados:

```txt
┌─────────┬────┬──────────────────┬────────────────────────────┐
│ (index) │ ID │ NOME            │ EMAIL                      │
├─────────┼────┼──────────────────┼────────────────────────────┤
│ 0       │ 14 │ Usuario Teste 1 │ usuarioTeste1@gmail.com   │
│ 1       │ 15 │ Usuario Teste 2 │ usuarioTeste2@hotmail.com │
└─────────┴────┴──────────────────┴────────────────────────────┘
```

Após deletar:

```txt
Usuário deletado com sucesso! ✅
```

---

# 🔒 Segurança

O sistema utiliza:

- Senhas criptografadas com bcrypt
- Queries parametrizadas com `?`
- Comparação segura de hash

---

# 🗄️ Senhas no Banco de Dados

As senhas NÃO são armazenadas diretamente no banco.

Exemplo:

| id | user_name | email | password |
|----|------------|--------|-----------|
| 14 | Usuário Teste 1 | usuarioTeste1@gmail.com | `$2b$10$Tq5.k4/pt2ze.PiaSlfKONVzFRlyIAo8oCDPrYHOVN2Drm` |

Fluxo da criptografia:

```txt
senha digitada
↓
bcrypt.hash()
↓
hash criptografado
↓
salvo no banco
```

Durante o login:

```txt
senha digitada
+
hash salvo no banco
↓
bcrypt.compare()
↓
true ou false
```

---

# 📂 Estrutura do Projeto

```txt
project/
├── database/
│   └── connection.js
│
├── models/
│   └── User.js
│
├── services/
│   ├── deleteUser.js
│   ├── login.js
│   ├── pause.js
│   ├── registerUser.js
│   └── saveData.js
│
├── index.js
├── package.json
├── package-lock.json
└── .gitignore
```

---

# 🧠 Conceitos Aplicados

- Integração com MySQL
- Autenticação de usuários
- Criptografia de senhas
- Programação assíncrona (`async/await`)
- Queries SQL parametrizadas
- Modularização de código
- Separação de responsabilidades
- Manipulação de arrays e objetos
- Entrada de dados com `readline`
- Fluxo controlado com callbacks
- Pool de conexões MySQL

---

# 🗄️ Operações SQL Utilizadas

```sql
SELECT
INSERT
DELETE
WHERE
AS
```

---

# 🛠️ Tecnologias Utilizadas

- Node.js
- MySQL
- mysql2
- bcrypt
- readline

---

# ⚙️ Como Executar

## Clone o repositório

```bash
git clone https://github.com/joaopedro-h/node.js-mysql-login.git
```

---

## Entre na pasta do projeto

```bash
cd node.js-mysql-login
```

---

## Instale as dependências

```bash
npm install
```

---

## Instale os pacotes necessários

```bash
npm install mysql2 bcrypt
```

---

# 🗄️ Configure o banco de dados

## Crie o banco

```sql
CREATE DATABASE dados;
```

---

## Crie a tabela

```sql
CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_name VARCHAR(255),
    email VARCHAR(255),
    password VARCHAR(255)
);
```

---

# 🔌 Configure a conexão

No arquivo:

```txt
database/connection.js
```

configure:

```js
host
user
password
database
```

---

# ▶️ Execute o projeto

```bash
node index.js
```

---

# 📚 Objetivo do Projeto

Este projeto foi desenvolvido como prática de:

- backend com Node.js
- autenticação de usuários
- criptografia de senhas
- SQL e MySQL
- arquitetura modular
- lógica de programação
- desenvolvimento CLI
- segurança de aplicações

---