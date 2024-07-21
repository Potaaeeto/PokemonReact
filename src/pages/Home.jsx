import axios from "axios";
import { useEffect, useState } from "react";
import pokeballIcon from "../assets/imgs/pokeball-icon.png";
import Loading from "../components/Loading";

const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const Home = () => {
  const [pokemon, setPokemon] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const getRandomPokemonId = () => {
    // PokeAPI has 1010 Pokemon as of now
    return Math.floor(Math.random() * 1010) + 1;
  };

  useEffect(() => {
    const fetchPokemon = async () => {
      const randomId = getRandomPokemonId();
      try {
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${randomId}`
        );
        setPokemon(response.data);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    };

    fetchPokemon();
  }, []);

  return isLoading ? (
    <Loading />
  ) : (
    <main>
      <div className="container">
        <h1>Welcome Pokemon Trainer!</h1>
        <p className="wild-pokemon">
          A wild <span>Pokemon </span>has appeared...
        </p>

        {pokemon && (
          <div className="one-pokemon">
            <p>N°{pokemon.id}</p>
            <h2>{capitalizeFirstLetter(pokemon.name)}</h2>
            <img
              src={pokemon.sprites.front_default || pokeballIcon}
              alt={pokemon.name}
              onError={(e) => (e.target.src = pokeballIcon)}
            />

            {/* Types */}
            <p>Types</p>
            <div className="img-type">
              {pokemon.types.map((type, index) => {
                return (
                  <div key={index} className={`type ${type.type.name}`}>
                    {type.type.name}
                  </div>
                );
              })}
            </div>

            {/* Abilities */}
            <p>Abilities</p>
            <div className="abilities">
              {pokemon.abilities.map((ability, index) => {
                return <span key={index}>{ability.ability.name}</span>;
              })}
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

export default Home;
