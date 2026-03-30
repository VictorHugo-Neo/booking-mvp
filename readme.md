# Booking MVP - Base Project

Sistema de agendamento simplificado desenvolvido em JavaScript (Fullstack).

## Como subir o ambiente

### 1. Backend (API)
1. Acesse `cd api` e rode `npm install`.
2. Crie um arquivo `.env` baseado no `.env.example`.
3. Certifique-se de que o Postgres está rodando e o banco `booking_db` existe.
4. Rode as migrations: `npm run knex:migrate`.
5. Inicie o servidor: `npm run dev`.

### 2. Frontend (Web)
1. Acesse `cd web` e rode `npm install`.
2. Inicie o Vite: `npm run dev`.

## Tech Stack
- **Backend:** Node.js, Express, Knex (Query Builder), PostgreSQL.
- **Frontend:** React, Vite, Tailwind CSS v4.