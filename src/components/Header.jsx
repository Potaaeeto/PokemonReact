import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Header = ({ pokemonLogo }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen((open) => !open);
  };

  const closeMenuAndNavigate = (path) => {
    setIsOpen(false);
    navigate(path);
  };

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
          <div className="burger-menu" onClick={toggleMenu}>
            <i className="fa-solid fa-bars"></i>
          </div>
          <nav className={`header-paragraphs ${isOpen ? "is-open" : ""}`}>
            <a onClick={() => closeMenuAndNavigate("/pokemons")}>Pokemon</a>
            <a onClick={() => closeMenuAndNavigate("/types")}>Types</a>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
