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
          <nav className="header-paragraphs">
            <a
              onClick={() => {
                return navigate("/pokemons");
              }}
            >
              Pokemon
            </a>
            <a
              onClick={() => {
                return navigate("/types");
              }}
            >
              Types
            </a>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
