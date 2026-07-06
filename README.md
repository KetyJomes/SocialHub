# Instruções de Execução

## Pré-requisitos

Antes de executar o projeto, é necessário ter instalado:

- Node.js (versão 18 ou superior)
- MySQL
- Git

## Passos para executar

### 1. Clonar o repositório

```bash
git clone <URL_DO_REPOSITORIO>
```

### 2. Acessar a pasta do projeto

```bash
cd <NOME_DO_PROJETO>
```

### 3. Instalar as dependências

```bash
npm install
```

### 4. Configurar o banco de dados

Crie um arquivo `.env` na raiz do projeto e configure a variável:

```env
DATABASE_URL="mysql://usuario:senha@localhost:3306/nome_do_banco"
```

### 5. Executar as migrations do Prisma

```bash
npx prisma migrate dev
```

### 6. Gerar o Prisma Client

```bash
npx prisma generate
```

### 7. Executar a aplicação

```bash
npm run dev
```

Após iniciar, acesse:

```
http://localhost:5173
```

## Tecnologias utilizadas

- React
- TypeScript
- Tailwind CSS
- Node.js
- Prisma ORM
- MySQL
- Chart.js
