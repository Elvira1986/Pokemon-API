# API Server

In this repository, you will use build a simple API server using Node/Express.

## Objectives

- Build a server from scratch using Node/Express.
- Create a REST API.

## Setup

Run `yarn` to install packages.
Run `yarn start` to run the development server.

## Basic Requirements

### 1. Pseudocode the current code.

- [ ] Explain what each line of code is doing.
  - Use the Express docs if you aren't sure!

### 2. Use Postman to test the current queries.

- [ ] After starting your server, check `GET` and `localhost:3000/` for data.

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
- [ ] `POST` `/pokemon` should add a new pokemon (you will need to provide the full data object).
  - To test this: after running your query in Postman, get that pokemon by ID.
  - 201: Created
  - 409: Conflict (resource exists)
- [ ] `PUT` `/pokemon/{id}` should update a pokemon by ID (you will need to provide the full data object).
  - To test this: after running your query in Postman, get that pokemon by ID and ensure that it changed.
  - 200: OK
  - 404: Not found (resource does not exist)
- [ ] `DELETE` `/pokemon/{id}` should delete a pokemon by ID.
  - To test this: after running your query in Postman, try to get that pokemon by ID.
  - 200: OK
  - 404: Not found (resource does not exist)

## Resources

- [Express documentation](https://expressjs.com/en/api.html)

## Notes

_This is a student project that was created at [CodeOp](http://CodeOp.tech), a full stack development bootcamp in Barcelona._
