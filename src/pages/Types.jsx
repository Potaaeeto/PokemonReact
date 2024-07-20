import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Types = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://pokeapi.co/api/v2/type");
        const filteredData = response.data.results.filter(
          (type) => type.name !== "unknown" && type.name !== "stellar"
        );
        // console.log(response.data);
        setData(filteredData);
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
        <h1>Types</h1>
        <div className="types-list">
          {data.map((type) => {
            // console.log(type.name);
            return (
              <Link key={type.name} to={`/typeinfo/${type.name}`}>
                <div className={`type-card ${type.name}`}>
                  <p>{type.name}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default Types;
