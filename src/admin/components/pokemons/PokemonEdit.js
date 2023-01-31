import React, { useEffect, useRef, useState } from "react";
import { pokemonService } from "@/_services";
import { useNavigate, useParams } from "react-router-dom";

const PokemonEdit = () => {
  const { id } = useParams();
  const flag = useRef(false);
  const navigate = useNavigate();
  const [pokemon, setPokemon] = useState([]);

  const onChange = (e) => {
    const { name, value } = e.target;
    if (name === "types") {
      setPokemon({
        ...pokemon,
        types: value.split(","),
      });
    } else {
      setPokemon({ ...pokemon, [name]: value });
    }
  };

  useEffect(() => {
    if (flag.current === false) {
      pokemonService
        .getPokemon(id)
        .then((result) => {
          setPokemon(result.data.data);
          // console.log(result.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    return () => (flag.current = true);
  }, [id]);

  // Soumission du formulaire
  const handleSave = (e) => {
    e.preventDefault();
    // console.log(pokemon);
    pokemonService
      .updatePokemon(pokemon)
      .then(navigate("../../"))
      .catch((err) => console.log(err));
  };

  if (!pokemon) return <p>Loading...</p>;

  return (
    <div>
      <form onSubmit={handleSave}>
        <label htmlFor="name">
          Name:
          <input
            type="text"
            name="name"
            value={pokemon.name || ""}
            onChange={onChange}
          />
        </label>
        <label htmlFor="cp">
          CP:
          <input
            type="text"
            name="cp"
            value={pokemon.cp || ""}
            onChange={onChange}
          />
        </label>
        <label htmlFor="hp">
          HP:
          <input
            type="text"
            name="hp"
            value={pokemon.hp || ""}
            onChange={onChange}
          />
        </label>
        <label htmlFor="picture">
          Picture:
          <input
            type="text"
            name="picture"
            value={pokemon.picture || ""}
            onChange={onChange}
          />
        </label>
        <label htmlFor="types">
          Types:
          <input
            type="text"
            name="types"
            value={pokemon.types || ""}
            onChange={onChange}
          />
        </label>
        <button>Save</button>
      </form>
    </div>
  );
};

export default PokemonEdit;
