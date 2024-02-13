const express = require("express");
const data = require("./data/pokemon.js");

const app = express();
app.use(express.json());


// Initialize variable to give each new Pokemon a unique ID
let nextPokemonId = data.length + 1;


app.get("/", function(req, res) {
  res.send({ message: "Hello! Try /pokemon" });
});

// GET all Pokemons
app.get("/pokemon", function(req, res) {
  // Return all Pokemons
  res.send(data);
});

// GET Pokemon by ID
app.get("/pokemon/:id", function(req, res) {
  // Find Pokemon with requested ID
  const pokemon = data.find(p => p.id === Number(req.params.id));

  if (pokemon) {
    // Pokemon was found; return it
    res.send(pokemon);
  } else {
    // Pokemon was not found; return 404 error
    res.status(404).send({ error: "Pokemon does not exist" });
  }
});

// Get attacks by Pokemon ID
app.get("/pokemon/:id/attacks", function(req, res) {
});

// POST Pokemon
app.post("/pokemon", function(req, res) {
  // Create new Pokemon obj with req.body
  // Add unique ID to obj, then increment unique ID variable
  // Add new Pokemon obj to data array
  // Return array of all Pokemons
});

// PUT Pokemon by ID
app.put("/pokemon/:id", function(req, res) {
  // Find the index of the Pokemon with the requested ID
  // If the Pokemon was found
    // Replace it with req.body in the array 
    // Return updated array
  // Else
    // Return 404 error
});

// DELETE Pokemon by ID
app.delete("/pokemon/:id", function(req, res) {
});

app.listen(4000);
console.log("Listening on port 4000...");
