import React, { useEffect, useRef, useState } from "react";
import "./listing.css";
// Imported Icons ====>
import { BsArrowRightShort } from "react-icons/bs";
import { AiFillHeart } from "react-icons/ai";
// Imported Images ====>
import user_1 from "@/assets/images/image_5.jpg";
import user_2 from "@/assets/images/image_6.jpg";
import user_3 from "@/assets/images/image_7.jpg";
import user_4 from "@/assets/images/image_8.jpg";

// Imported Functions ====>
import { pokemonService } from "@/_services";
import { useNavigate } from "react-router-dom";

const Listing = () => {
  const flag = useRef(false);
  const [pokemons, setPokemons] = useState([]);
  let navigate = useNavigate();

  //useEffect stop double appel
  useEffect(() => {
    if (flag.current === false) {
      pokemonService
        .getAllPokemons()
        .then((res) => {
          setPokemons(res.data.data);
          console.log(res.data.data);
        })
        .catch((err) => console.log(err));
    }
    return () => (flag.current = true);
  }, []);

  return (
    <div className="listingSection">
      <div className="heading flex">
        <h1>My Pokemons</h1>
        <button className="btn flex">
          See All
          <BsArrowRightShort className="icon" />
        </button>
      </div>

      <div className="secContainer flex">
        {pokemons.map((pokemon) => (
          <div
            onClick={(e) => navigate(`../edit/${pokemon.id}`)}
            key={pokemon.id}
            className="singleItem"
          >
            <AiFillHeart className="icon" />
            <img src={pokemon.picture} alt={pokemon.name} />
            <h2>{pokemon.name}</h2>
            <h3>{pokemon.types.join(", ")}</h3>
          </div>
        ))}
      </div>

      <div className="sellers flex">
        <div className="topSellers">
          <div className="heading flex">
            <h3>Top Sellers</h3>
            <button className="btn flex">
              See All <BsArrowRightShort className="icon" />
            </button>
          </div>

          <div className="card flex">
            <div className="users">
              <img src={user_1} alt="Image_person" />
              <img src={user_2} alt="Image_person" />
              <img src={user_3} alt="Image_person" />
              <img src={user_4} alt="Image_person" />
            </div>
            <div className="cardText">
              <span>
                14.565 Mopeno sold <br />
                <small>
                  21 Sellers <span className="date">7 Days</span>
                </small>
              </span>
            </div>
          </div>
        </div>

        <div className="featuredSellers">
          <div className="heading flex">
            <h3>Featured</h3>
            <button className="btn flex">
              See All <BsArrowRightShort className="icon" />
            </button>
          </div>

          <div className="card flex">
            <div className="users">
              <img src={user_1} alt="Image_person" />
              <img src={user_3} alt="Image_person" />
              <img src={user_4} alt="Image_person" />
              <img src={user_2} alt="Image_person" />
            </div>
            <div className="cardText">
              <span>
                99,565 Mopeno sold <br />
                <small>
                  28 Sellers <span className="date">31 days</span>
                </small>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Listing;
