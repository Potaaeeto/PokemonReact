import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import pokeballIcon from "../assets/imgs/pokeball-icon.png";
import Loading from "../components/Loading";

const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const PokemonInfo = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${id}`
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
    <Loading />
  ) : (
    <main>
      <div className="container">
        <h1>Pokemon's info</h1>
        <div className="one-pokemon">
          <p>N°{data.id}</p>
          <h2>{capitalizeFirstLetter(data.name)}</h2>

          <img
            src={data.sprites.front_default || pokeballIcon}
            alt={data.name}
            onError={(e) => (e.target.src = pokeballIcon)}
          />
          <p>Types </p>
          <div className="img-type">
            {/* types */}
            {data.types.map((type, index) => {
              return (
                <Link key={index} to={`/typeinfo/${type.type.name}`}>
                  <div className={`type ${type.type.name}`}>
                    {type.type.name}
                  </div>
                </Link>
              );
            })}
          </div>

          {/* abilities */}
          <p>Abilities</p>
          <div className="abilities">
            {data.abilities.map((ability, index) => {
              return <span key={index}>{ability.ability.name}</span>;
            })}
          </div>
        </div>
      </div>
    </main>
  );
};

export default PokemonInfo;
