# Conserts API

Ett enkelt REST-API byggt med **Node.js**, **Fastify** och **MySQL** för att hantera konserter.  
API:t stödjer grundläggande CRUD-funktionalitet (Create, Read, Update och Delete).

---

## Tekniker

- Node.js
- Fastify
- MySQL

---

## Skapa databas och tabell

CREATE DATABASE IF NOT EXISTS conserts;

USE conserts;

CREATE TABLE IF NOT EXISTS conserts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    artist VARCHAR(255) NOT NULL,
    seen BOOLEAN NOT NULL DEFAULT FALSE
);

---

## Starta servern
node server.js

---

## API-endpoints

GET /conserts – hämta alla konserter
GET /conserts/:id – hämta konsert via id
POST /conserts – lägg till konsert
DELETE /conserts/:id – radera konsert
