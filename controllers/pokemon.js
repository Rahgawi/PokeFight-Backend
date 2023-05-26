const pokemon = require('../pokedata/pokedex.json');
function getAllPokemons(req, res) {
  const { indexFrom, indexTo } = req.query;

  if (indexFrom && indexTo) {
    res.status(200).send(pokemon.slice(indexFrom, indexTo));
  } else {
    res.status(200).send(pokemon);
  }
}

function getPokemonById(req, res) {
  const { id } = req.params;
  const singlePokemon = pokemon.find((item) => item.id == id);
  res.status(200).send(singlePokemon);
}

function getPokemonInfo(req, res) {
  const { info } = req.params;
  res.status(200).send(`get the pokomon info ${info}`);
}

module.exports = { getAllPokemons, getPokemonById, getPokemonInfo };
