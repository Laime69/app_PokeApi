const BASE_URL = "https://pokeapi.co/api/v2";

export const getPokemons = async (limit = 50) => {
  const res = await fetch(`${BASE_URL}/pokemon?limit=${limit}`);
  const data = await res.json();
  return data.results;
};

export const getPokemonByName = async (name) => {
  const res = await fetch(`${BASE_URL}/pokemon/${name}`);
  if (!res.ok) throw new Error("Pokemon no encontrado");
  return await res.json();
};

export const getPokemonDetail = async (url) => {
  const res = await fetch(url);
  return await res.json();
};