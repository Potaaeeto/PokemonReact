import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
        <h1>1 Type</h1>
        <div className="one-type">
          <p>Type : {data.name}</p>
          <span>Pokemon's name :</span>
          {data.pokemon.map((one, index) => {
            return (
              <span className="type-pokemon" key={index}>
                {one.pokemon.name}
              </span>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default TypeInfo;
