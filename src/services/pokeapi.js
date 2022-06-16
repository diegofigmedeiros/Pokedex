export function getPokemons() {
    return fetch('https://pokeapi.co/')
      .then(data => data.json())
  }