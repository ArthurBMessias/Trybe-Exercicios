const axios = require('axios');

const getPokemon = async (id) => {
  const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
  return response.data;
};

async function main() {
    const promises = []

  for (let pokemonId = 1; pokemonId <= 10; pokemonId++) {
    const promise =  getPokemon(pokemonId);
    promises.push(promise)

    console.log(pokemon.name);
  }
}

main();
