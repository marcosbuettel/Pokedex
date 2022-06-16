import React, { useState } from 'react';
import {
  PokedexBattleStyled,
  PokedexBattleHeader,
  PokedexBattleList,
  PokedexBattleSelected,
  PokedexBattleNoSelected,
} from './PokedexBattleStyled';
import close from '../../assets/close.png';
import pokeballClosed from '../../assets/pokeball-closed.png';
import PokedexBattleSlots from '../PokedexBattleSlots/PokedexBattleSlots';

const PokedexBattle = (props) => {
  const [battleSlot1, setBattleSlot1] = useState();
  const [battleSlot2, setBattleSlot2] = useState();

  const choosePokemon = (pokemon) => {
    !battleSlot1 ? setBattleSlot1(pokemon) : setBattleSlot2(pokemon);
  };

  const removePokemon = (pokemon) => {
    battleSlot1 && battleSlot1.id === pokemon.id
      ? setBattleSlot1()
      : setBattleSlot2();
  };

  const pokedexList =
    props.pokedexList &&
    props.pokedexList.map((pokemon) => {
      if (
        (battleSlot1 && battleSlot1.id === pokemon.id) ||
        (battleSlot2 && battleSlot2.id === pokemon.id)
      ) {
        return (
          <PokedexBattleSelected key={pokemon.id}>
            <img
              src={pokemon.sprites.front_default}
              alt="Pokemon sprite"
              onClick={() => {
                removePokemon(pokemon);
              }}
            />
          </PokedexBattleSelected>
        );
      } else {
        return (
          <PokedexBattleNoSelected key={pokemon.id}>
            <p>{pokemon.name.toUpperCase()}</p>
            <img
              src={pokeballClosed}
              onClick={() => {
                choosePokemon(pokemon);
              }}
              alt="Pokeball"
            />
          </PokedexBattleNoSelected>
        );
      }
    });

  return (
    <PokedexBattleStyled>
      <PokedexBattleHeader>
        <h3>Choose two pokemon and prepare for battle!</h3>
        <img onClick={props.closeWindow} src={close} alt="Close" />
      </PokedexBattleHeader>
      <PokedexBattleList>{pokedexList}</PokedexBattleList>
      <PokedexBattleSlots battleSlot1={battleSlot1} battleSlot2={battleSlot2} />
    </PokedexBattleStyled>
  );
};

export default PokedexBattle;
