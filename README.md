# API Server

With this repository you will build a simple API server using Node/Express.

## Objectives

- Build a server from scratch using Node/Express.
- Create a REST API.

## Setup

Run `npm install` to install packages.
Run `npm start` to run the development server.

## Basic Requirements

### 1. Pseudocode the current code.

- [ ] Explain what each line of code is doing.
  - Use the Express docs if you aren't sure!

### 2. Use Postman to test the current queries.

- [ ] After starting your server, check `GET /` on `localhost:5000`.

### 3. Build additional queries.

- [ ] `GET` `/pokemon` should return all pokemon.
  - To test this: run your query in Postman.
  - 200: OK
- [ ] `GET` `/pokemon/{id}` should return a pokemon by ID.
  - To test this: run your query in Postman.
  - 200: OK
  - 404: Not found (resource does not exist)
- [ ] `GET` `/pokemon/{id}/attacks` should return all attacks for a pokemon by ID.
  - To test this: run your query in Postman.
  - 200: OK
  - 404: Not found (resource does not exist)
- [ ] `POST` `/pokemon` should add a new pokemon (you will need to provide a full data object without an ID).
  - To test this: does the server response contain the new Pokemon?
  - 201: Created
- [ ] `PUT` `/pokemon/{id}` should update a pokemon by ID (you will need to provide the full data object with its ID).
  - To test this: has the Pokemon in the server response been updated?
  - 200: OK
  - 404: Not found (resource does not exist)
- [ ] `DELETE` `/pokemon/{id}` should delete a pokemon by ID.
  - To test this: the deleted Pokemon should not be in the server response.
  - 200: OK
  - 404: Not found (resource does not exist)

## Resources

- [Express documentation](https://expressjs.com/en/api.html)

## Notes

_This is a student project that was created at [CodeOp](http://CodeOp.tech), a full stack development bootcamp in Barcelona._
