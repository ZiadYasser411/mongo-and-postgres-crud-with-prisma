# Tutoruu CRUD API

This is a **Node.js + Express + Prisma** project that demonstrates a CRUD API using **two databases**:

- **Postgres** (with Prisma ORM) → `Users`, `Occupations`  
- **MongoDB** (with Prisma ORM) → `Products`, `Reviews`

The project includes **Swagger UI** for API documentation and testing. 

## Features
- CRUD APIs for:
  - **Users** (Postgres)
  - **Occupations** (Postgres)
  - **Products** (MongoDB)
  - **Reviews** (MongoDB)
- **Prisma ORM** for database access
- **Swagger UI** (`/api-docs`) for interactive API docs
- **Dockerized Postgres + MongoDB + Mongo Express + PgAdmin**
- Clean project structure with separate route files

## Tech Stack
- **Node.js + Express**
- **TypeScript**
- **Prisma**
- **PostgreSQL**
- **MongoDB (Replica Set enabled for transactions)**
- **Swagger UI**
- **Docker & Docker Compose**

## Setup & Installation

### 1- Clone the repo
```bash
git clone https://github.com/your-username/tutoruu-crud-api.git
cd tutoruu-crud-api
```
### 2- Install dependencies
```bash
npm install
```
### 3- Start docker containers
```bash
docker compose up --build -d
```
### 4- Apply prisma schemas
```bash
# For Postgres
npx prisma migrate dev --schema=prisma/postgres/schema.prisma
# For MongoDB
npx prisma db push --schema=prisma/mongodb/schema.prisma
```
### 5- Start the server
```bash
npm run dev
```

<img width="1919" height="1020" alt="image" src="https://github.com/user-attachments/assets/06ddc295-164c-41bd-8a13-9e004d3a46f4" />
<img width="1801" height="959" alt="image" src="https://github.com/user-attachments/assets/55ca7b6c-a3e4-44a6-b0d9-5f650479d55a" />
<img width="1800" height="949" alt="image" src="https://github.com/user-attachments/assets/8518e54c-6f3d-49f8-9484-1a065ee918dc" />
<img width="1808" height="101" alt="image" src="https://github.com/user-attachments/assets/678ab291-7c5c-4a19-885a-1a933879c730" />
