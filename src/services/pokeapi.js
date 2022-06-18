export function getPokemons(pokemon) {
    return fetch('https://pokeapi.co/api/v2/pokemon')
      .then(data => data.json())
  }