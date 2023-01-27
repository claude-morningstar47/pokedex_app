import Axios from "./caller.service";

// let getAllPokemons = async () => {
//   const { data } = await Axios.get("/api/pokemons");
//   return data;
// };

let getAllPokemons = () => {
  return Axios.get("/api/pokemons");
};

// let getPokemon = async (uid) => {
//   const { data } = await Axios.get("/api/pokemons/" + uid);
//   return data;
// };

let getPokemon = (uid) => {
  return Axios.get("/api/pokemons/" + uid);
};

let addPokemon = (pokemon) => {
  return Axios.post("/api/pokemons/", pokemon);
};

let updatePokemon = (pokemon) => {
  return Axios.put("/api/pokemons/" + pokemon.id, pokemon);
};

let deletePokemon = (uid) => {
  return Axios.delete("/api/pokemons/" + uid);
};

export const pokemonService = {
  getAllPokemons,
  getPokemon,
  updatePokemon,
  deletePokemon,
  addPokemon,
};
