import "./App.css";

// Je renomme BrowserRouter en Router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//import des Pages
import Home from "./pages/Home";
import Pokemons from "./pages/Pokemons";
import PokemonInfo from "./pages/PokemonInfo";
import Types from "./pages/Types";
import TypeInfo from "./pages/TypeInfo";

//import des composants
import Header from "./components/Header";

//import images
import pokemonLogo from "./assets/imgs/pokemon-logo.png";

function App() {
  return (
    // Router doit contenir tout mon site
    <Router>
      <Header pokemonLogo={pokemonLogo} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemons" element={<Pokemons />} />
        <Route path="/pokemoninfo/:id" element={<PokemonInfo />} />
        <Route path="/typeinfo/:id" element={<TypeInfo />} />
        <Route path="/types" element={<Types />} />
        <Route path="*" element={<p>Error 404</p>} />
      </Routes>
    </Router>
  );
}

export default App;
