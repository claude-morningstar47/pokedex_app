import Axios from "./caller.service";

let getAllPokemons = async () => {
  const { data } = await Axios.get("/api/pokemons");
  return data;
};

// let getAllPokemons = () => {
//   return Axios.get("/api/pokemons");
// };

// let getPokemon = async (uid) => {
//   const { data } = await Axios.get("/api/pokemons/" + uid);
//   return data;
// };

let getPokemon = (id) => {
  return Axios.get("/api/pokemons/" + id);
};

let addPokemon = async (pokemon) => {
  return await Axios.post("/api/pokemons/", pokemon);
};

let updatePokemon = async (pokemon) => {
  return await Axios.put("/api/pokemons/" + pokemon.id, pokemon);
};

let deletePokemon = async (uid) => {
  return await Axios.delete("/api/pokemons/" + uid);
};

export const pokemonService = {
  getAllPokemons,
  getPokemon,
  updatePokemon,
  deletePokemon,
  addPokemon,
};
