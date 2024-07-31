const express = require("express");
const data = require("./data/pokemon.js");

const app = express();
app.use(express.json());

// Initialize variable to give each new Pokemon a unique ID
let nextPokemonId = data.length + 1;

app.get("/", function (req, res) {
  res.send({ message: "Hello! Try /pokemon" });
});

// GET all Pokemons
app.get("/pokemon", function (req, res) {
  // Return all Pokemons
  res.send(data);
});

// GET Pokemon by ID
app.get("/pokemon/:id", function (req, res) {
  // Find Pokemon with requested ID
  const pokemon = data.find((p) => p.id === Number(req.params.id));

  if (pokemon) {
    // Pokemon was found; return it
    res.send(pokemon);
  } else {
    // Pokemon was not found; return 404 error
    res.status(404).send({ error: "Pokemon does not exist" });
  }
});

// Get attacks by Pokemon ID
app.get("/pokemon/:id/attacks", function (req, res) {
  const pokemon = data.find((p) => p.id === Number(req.params.id));
  if (pokemon) {
    // Pokemon was found and return it
    res.send(pokemon.attacks);
  } else {
    // Pokemon's attacks was not found; return 404 error
    res.status(404).send({ error: "Pokemon's attacks does not exist" });
  }
});

// POST- add new Pokemon
app.post("/pokemon", function (req, res) {
  // Create new Pokemon obj with req.body
  let newPokemon = req.body;
  // Add unique ID to Pokemons's obj, then increment unique ID variable
  newPokemon.id = nextPokemonId++;
  // Add new Pokemon obj to data array
  data.push(newPokemon);
  // Return array of all Pokemons
  res.status(201).send(data);
});

// PUT/ Update or replace Pokemon by ID
app.put("/pokemon/:id", function (req, res) {
  // Find the index of the Pokemon with the requested ID
  let id = Number(req.params.id);
  let ix = data.findIndex((c) => c.id === id);
  // If the Pokemon was found
  // Replace it with req.body in the array and update it
  if (ix === -1) {
    //Pokemon not found; return 404 status code
    res.status(404).send({ error: "Pokemon is not found" });
  } else {
    // Create new Pokemons obj from request body
    let modifiedPokemon = req.body;
    // Make sure modified pokemon doesn't try to change ID
    modifiedPokemon.id = id;
    // Replace old Pokemons with modified one
    data[ix] = modifiedPokemon;
    // Return all Pokemons
    res.send(data);
  }
});

// DELETE Pokemon by ID
app.delete("/pokemon/:id", function (req, res) {
  // Get Pokemons ID from URL parameter
  let ix = data.findIndex((c) => c.id === Number(req.params.id));
  if (ix === -1) {
    // Return status code 404 if not found
    res.status(404).send({ error: "Pokemon is not found" });
  } else {
    // Remove Pokemon from DB
    data.splice(ix, 1);
    // Return remaining Pokemon Data
    res.send(data);
  }
});

app.listen(4000);
console.log("Listening on port 4000...");
