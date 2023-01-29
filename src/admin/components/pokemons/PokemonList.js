import React from "react";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
// Imported Functions ====>
import { pokemonService } from "@/_services";
import { AiFillHeart } from "react-icons/ai";

const PokemonList = () => {
  let navigate = useNavigate();

  const { isLoading, isError, error, data } = useQuery("pokemons", () =>
    pokemonService.getAllPokemons()
  );
  const pokemons = data;

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  if (isLoading) {
    return <div>Loading ....</div>;
  }
  return (
    <div className="mainContent grid">
      PokemonList
      <div className="">
        {pokemons.data.map((pokemon) => (
          <div
            onClick={(e) => navigate(`../edit/${pokemon.id}`)}
            key={pokemon.id}
            className="singleItem"
          >
            <AiFillHeart className="icon" />
            <img src={pokemon.picture} alt={pokemon.name} />
            <h2>{pokemon.name}</h2>
            <h2>{pokemon.cp}</h2>
            <h2>{pokemon.hp}</h2>
            <h3>{pokemon.types.join(", ")}</h3>
            <h2>{pokemon.created}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PokemonList;
