import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../components/Home/Home';
import Pokedex from '../components/Pokedex/Pokedex';
import PokemonDetails from '../components/PokemonDetails/PokemonDetails';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/:page" element={<Home />} />
        <Route path="pokemonDetails/:pokemon" element={<PokemonDetails />} />
        <Route path="pokedex/:dexfilter" element={<Pokedex />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
