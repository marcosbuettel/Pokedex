import { URL_BASE } from '../../constants/URL_BASE';
import React, { useState } from 'react';
import PokemonCard from '../PokemonCard/PokemonCard';
import { useNavigate } from 'react-router-dom';
import { goHome } from '../Coordinator/Coordinator';
import { ButtonHomeStyled } from '../Home/HomeStyled';
import { PokemonDetailNavBar } from '../PokemonDetails/PokemonDetailsStyled';
import { PokemonList } from './PokedexStyled';
import PokedexBattle from '../PokedexBattle/PokedexBattle';
import { OpenBattleStyled } from '../ActionButtons/ActionButtonsStyled';

function Pokedex() {
  var pokedexStorage;
  if (localStorage.getItem('pokedex') === null) {
    pokedexStorage = [];
  } else {
    pokedexStorage = localStorage.getItem('pokedex');
    pokedexStorage = JSON.parse(pokedexStorage);
  }

  const navigate = useNavigate();
  const [pokedexList, setPokedexList] = useState(pokedexStorage);
  const [openBattle, setOpenBattle] = useState(false);

  const removePokedex = (id) => {
    const newPokedexList = pokedexList.filter((pokemon) => {
      return pokemon.id !== id;
    });

    localStorage.setItem('pokedex', JSON.stringify(newPokedexList));
    const pokemonListObject = JSON.parse(localStorage.getItem('pokedex'));
    setPokedexList(pokemonListObject);
  };

  const currentPokedexList =
    pokedexList &&
    pokedexList.map((pokemon) => {
      return (
        <PokemonCard
          key={pokemon.id}
          pokemonUrl={`${URL_BASE}pokemon/${pokemon.id}`}
          removePokedex={removePokedex}
          pokedexList={pokedexList}
        ></PokemonCard>
      );
    });

  const openBattleWindow = () => {
    setOpenBattle(true);
  };

  const closeBattleWindow = () => {
    setOpenBattle(false);
  };

  const pokedex = (
    <div>
      <PokemonDetailNavBar>
        <h1>POKEDEX</h1>
        <div>
          <OpenBattleStyled onClick={openBattleWindow}>Battle</OpenBattleStyled>
          <ButtonHomeStyled
            onClick={() => {
              goHome(navigate);
            }}
          >
            Home
          </ButtonHomeStyled>
        </div>
      </PokemonDetailNavBar>
      <div>
        <PokemonList>{currentPokedexList}</PokemonList>
      </div>
    </div>
  );

  return (
    <>
      {pokedex}{' '}
      {openBattle && (
        <PokedexBattle
          closeWindow={closeBattleWindow}
          pokedexList={pokedexList}
        />
      )}
    </>
  );
}

export default Pokedex;
