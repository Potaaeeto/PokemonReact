import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const Pokemons = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1); // Ajout de l'état pour la page actuelle

  const fetchData = async (page) => {
    try {
      setIsLoading(true);
      const limit = 20;
      const offset = (page - 1) * limit;
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
      );
      // console.log(response.data);
      setData(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  // useEffect est declenche a chaque fois que currentPage change, rechargeant les données pour une nouvelle page
  useEffect(() => {
    fetchData(currentPage); // Charger les données pour la page actuelle
  }, [currentPage]); // Recharge les données lors du changement de page

  const handleNextPage = () => {
    if (data.next) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (data.previous) {
      setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
    }
  };

  return isLoading ? (
    <p>En cours de chargement...</p>
  ) : (
    <main>
      <div className="container">
        {/* <h1>Pokemon</h1> */}
        <div className="pokemon-list">
          {data.results.map((pokemon) => {
            // console.log(pokemon.name);
            const url = pokemon.url.split("/")[6];
            return (
              <Link key={pokemon.name} to={`/pokemoninfo/${pokemon.name}`}>
                <div className="pokemon-card">
                  <img
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${url}.png`}
                    alt={pokemon.name}
                  />
                  <p>{capitalizeFirstLetter(pokemon.name)}</p>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Pagination */}
        <div className="pagination">
          <button onClick={handlePreviousPage} disabled={!data.previous}>
            Previous
          </button>
          <button onClick={handleNextPage} disabled={!data.next}>
            Next
          </button>
        </div>
      </div>
    </main>
  );
};

export default Pokemons;
