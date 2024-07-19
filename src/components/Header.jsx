import { useNavigate } from "react-router-dom";

const Header = ({ pokemonLogo }) => {
  const navigate = useNavigate();

  return (
    <>
      <header>
        <div className="container">
          <img
            onClick={() => {
              return navigate("/");
            }}
            src={pokemonLogo}
            alt="pokemon-logo"
          />
          <div className="header-paragraphs">
            <p
              onClick={() => {
                return navigate("/pokemons");
              }}
            >
              Pokemon
            </p>
            <p
              onClick={() => {
                return navigate("/types");
              }}
            >
              Types
            </p>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
