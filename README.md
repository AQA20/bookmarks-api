<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">📚 Bookmarks REST API Built using NestJs.</p>
 


## Description

A RESTful API for managing bookmarks, built with [NestJS](https://nestjs.com/). This project is designed using scalable architecture, modern backend practices, and follows clean code principles.

---

## 🚀 Features

- ✅ User authentication (JWT-based)
- ✅ CRUD operations for bookmarks
- ✅ Input validation and DTOs
- ✅ Protected routes with guards
- ✅ Exception filters and global error handling
- ✅ Prisma ORM with PostgreSQL
- ✅ E2E testing setup with Pactum
- ✅ Docker-ready (optional)
- ✅ Clean modular structure (scalable for microservices)

---

## 📦 Tech Stack

- **Framework**: [NestJS](https://nestjs.com/)
- **ORM**: [Prisma](https://www.prisma.io/)
- **Database**: PostgreSQL
- **Authentication**: JWT (access tokens)
- **Testing**: Pactum, Jest
- **Validation**: `class-validator`, `class-transformer`
- **Environment management**: `@nestjs/config`

---

## Project setup

```bash
$ npm install
```

## Set up environment variables

```bash
DATABASE_URL="postgresql://USER:PASSWORD@localhost:5432/bookmarks"
JWT_SECRET="your_jwt_secret"
JWT_EXPIRES_IN="15m"
```

## Set up the database
```bash
npx prisma generate
npx prisma migrate dev --name init
```

## Run the server

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e
```
---

## 📬 API Endpoints

### 🔐 Auth

| Method | Endpoint        | Description           |
|--------|---------------- |-----------------------|
| POST   | `/auth/signup`  | Register a new user   |
| POST   | `/auth/signin`  | Login and get JWT     |

### 👤 Users

| Method | Endpoint         | Description           |
|--------|------------------|-----------------------|
| GET    | `/users/profile` | Get user              |
| PATCH  | `/users/`        | Update user           |

### 🔖 Bookmarks (Protected)

| Method | Endpoint            | Description           |
|--------|---------------------|-----------------------|
| GET    | `/bookmarks`        | Get all bookmarks     |
| POST   | `/bookmarks`        | Create a new bookmark |
| GET    | `/bookmarks/:id`    | Get bookmark by ID    |
| PATCH  | `/bookmarks/:id`    | Update bookmark by ID |
| DELETE | `/bookmarks/:id`    | Delete bookmark by ID |

---


## 🔒 Authentication

All bookmarks routes are protected using JWT. Pass the token in the `Authorization` header:

---

## 🐳 Docker Support (Optional)

```bash
docker-compose up -d
```
Ensure your .env file is properly configured and that the docker-compose.yml file exists.

---
## 👤 Author

**Ahmad AbuDawaba**  
🔗 [GitHub](https://github.com/AQA20) • [LinkedIn](https://www.linkedin.com/in/ahmad-abudawaba/)