import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const TypeInfo = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://pokeapi.co/api/v2/type/${id}`
        );
        // console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [id]);

  return isLoading ? (
    <p>En cours de chargement...</p>
  ) : (
    <main>
      <div className="container">
        {/* <h1>1 Type</h1> */}
        <p className={`one-type ${data.name}`}>{data.name}</p>

        <div className="pokemon-list">
          {data.pokemon.map((one, index) => {
            const url = one.pokemon.url.split("/")[6];
            return (
              <Link key={index} to={`/pokemoninfo/${one.pokemon.name}`}>
                <div className="pokemon-card">
                  <img
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${url}.png`}
                    alt=""
                  />
                  <p>{capitalizeFirstLetter(one.pokemon.name)}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default TypeInfo;
