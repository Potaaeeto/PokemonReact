import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Pokemons = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://pokeapi.co/api/v2/pokemon");
        console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return isLoading ? (
    <p>En cours de chargement...</p>
  ) : (
    <main>
      <div className="container">
        <h1>Pokemons</h1>
        <div className="pokemon-list">
          {data.results.map((pokemon) => {
            // console.log(pokemon.name);
            const url = pokemon.url.split("/")[6];
            return (
              <Link key={pokemon.name} to={`/pokemoninfo/${pokemon.name}`}>
                <div className="pokemon-card">
                  <img
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${url}.png`}
                    alt=""
                  />
                  <h3>{pokemon.name}</h3>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default Pokemons;
