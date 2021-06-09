const express = require("express");
const app = express();
const data = require("./data/pokemon.js");

app.use(function(req, res, next) {
  res.type("json");
  res.set({
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,POST,PUT,DELETE"
  });

  next();
});

app.get("/pokemon", function(req, res) {
  res.send(data);
});

app.get("/pokemon/:id", function(req, res) {
  const pokemon = data.find(e => +e.id === +req.params.id);

  if (!pokemon) {
    return res.status(404).send("Pokemon does not exist");
  }

  res.send(pokemon);
});

app.post("/pokemon", function(req, res) {
  console.log(req.body);
  data.push(req.body);
  res.send(data);
});

app.get("/", function(req, res) {
  res.send("Hello world");
});

app.listen(3000);
console.log("Listening on port 3000...");
