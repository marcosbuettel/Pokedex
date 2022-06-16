import React, { useState } from 'react';
import { BackPageButton } from '../ActionButtons/ActionButtons';
import { useRequestData } from '../../hooks/useRequestData';
import { useParams } from 'react-router-dom';
import { URL_BASE } from '../../constants/URL_BASE';
import {
  PokemonDetailStyled,
  PokemonDetailNavBar,
  PokemonDetailSprite,
  PokemonDetailInfoBox,
  PokemonDetailStats,
} from './PokemonDetailsStyled';
import PokemonType from '../PokemonType/PokemonType';
import { PokemonStats } from '../PokemonStats/PokemonStats';
import { AddPokedex, RemovePokedex } from '../ActionButtons/ActionButtons';
import move from '../../assets/move.png';
import dna from '../../assets/dna.png';
import stats from '../../assets/stats.png';

const PokemonDetails = () => {
  var pokedexStorage;
  if (localStorage.getItem('pokedex') === null) {
    pokedexStorage = [];
  } else {
    pokedexStorage = localStorage.getItem('pokedex');
    pokedexStorage = JSON.parse(pokedexStorage);
  }
  const pathParams = useParams();
  const [pokedexList, setPokedexList] = useState(pokedexStorage);
  const [pokemonDetail] = useRequestData(
    `${URL_BASE}pokemon/${pathParams.pokemon}`,
  );

  const addPokedex = (pokemon) => {
    if (pokedexList.length < 20) {
      const pokemonList = [...pokedexList, pokemon];
      localStorage.setItem('pokedex', JSON.stringify(pokemonList));
      const pokemonListObject = JSON.parse(localStorage.getItem('pokedex'));
      setPokedexList(pokemonListObject);
    } else {
      alert(
        'Sua Pokedex está cheia! Por favor, remova algum Pokemon antes de adicionar outro.',
      );
    }
  };

  const removePokedex = (id) => {
    const newPokedexList = pokedexList.filter((pokemon) => {
      return pokemon.id !== id;
    });

    localStorage.setItem('pokedex', JSON.stringify(newPokedexList));
    const pokemonListObject = JSON.parse(localStorage.getItem('pokedex'));
    setPokedexList(pokemonListObject);
  };

  const pokemonFilter = pokedexList.map((pokemon) => {
    return pokemon.name;
  });

  const details = pokemonDetail && (
    <PokemonDetailStyled>
      <PokemonDetailNavBar>
        <BackPageButton />
        <h1>{pokemonDetail.name.toUpperCase()}</h1>
        {!pokemonFilter.includes(pokemonDetail.name) && (
          <AddPokedex addPokedex={addPokedex} pokemonStatsId={pokemonDetail} />
        )}

        {pokemonFilter.includes(pokemonDetail.name) && (
          <RemovePokedex
            removePokedex={removePokedex}
            pokemonStatsId={pokemonDetail.id}
          />
        )}
      </PokemonDetailNavBar>

      <div>
        <div>
          <PokemonDetailSprite>
            <img alt="Front sprite" src={pokemonDetail.sprites.front_default} />
          </PokemonDetailSprite>

          <PokemonDetailSprite>
            <img alt="Back sprite" src={pokemonDetail.sprites.back_default} />
          </PokemonDetailSprite>
        </div>

        <PokemonDetailStats>
          <PokemonDetailInfoBox>
            <img src={dna} alt="TYPE" />
            <h2>TYPE</h2>
          </PokemonDetailInfoBox>
          <PokemonDetailInfoBox>
            <PokemonType type={pokemonDetail.types[0]['type'].name} />
            {pokemonDetail.types[1] && (
              <PokemonType type={pokemonDetail.types[1]['type'].name} />
            )}
          </PokemonDetailInfoBox>
          <br />
          <PokemonDetailInfoBox>
            <img src={stats} alt="STATS" />
            <h2>STATS</h2>
          </PokemonDetailInfoBox>
          <PokemonStats pokemonStats={pokemonDetail} />
        </PokemonDetailStats>

        <div>
          <PokemonDetailInfoBox>
            <img src={move} alt="MOVES" />
            <h2>MOVES</h2>
          </PokemonDetailInfoBox>
          <PokemonDetailInfoBox>
            <div>
              <p>{pokemonDetail.moves[0]['move'].name.toUpperCase()}</p>
              <p>{pokemonDetail.moves[1]['move'].name.toUpperCase()}</p>
              <p>{pokemonDetail.moves[2]['move'].name.toUpperCase()}</p>
              <p>{pokemonDetail.moves[3]['move'].name.toUpperCase()}</p>
            </div>
          </PokemonDetailInfoBox>
        </div>
      </div>
    </PokemonDetailStyled>
  );

  return <>{details}</>;
};

export default PokemonDetails;
