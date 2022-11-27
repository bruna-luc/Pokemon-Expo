export async function getPokemons() {
  return await fetch("https://pokeapi.co/api/v2/pokemon").then((response) => {
    return response.json();
  });
}

export async function getDetailsPokemon(name) {
  return await fetch("https://pokeapi.co/api/v2/pokemon/" + name).then(
    (response) => {
      return response.json();
    }
  );
}
