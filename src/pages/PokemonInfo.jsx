import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

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
        console.log(response.data);
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
        <h1>1 Pokemon</h1>
        <div className="one-pokemon">
          {data.forms.map((one, index) => {
            return <p key={index}>Pokemon's name : {one.name}</p>;
          })}
          {data.types.map((type, index) => {
            return (
              <Link key={index} to={`/typeinfo/${type.type.name}`}>
                <div>
                  <span>Type : {type.type.name}</span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default PokemonInfo;
