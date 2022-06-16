import { URL_BASE } from '../../constants/URL_BASE';
import React, { useState } from 'react';
import { useRequestData } from '../../hooks/useRequestData';
import PokemonCard from '../PokemonCard/PokemonCard';
import { useNavigate, useParams } from 'react-router-dom';
import { changePokemonPage, goToPokedex } from '../Coordinator/Coordinator';
import { PokemonList, Pagination, ButtonHomeStyled } from './HomeStyled';
import { PokemonDetailNavBar } from '../PokemonDetails/PokemonDetailsStyled';

function Home() {
  var pokedexStorage;
  if (localStorage.getItem('pokedex') === null) {
    pokedexStorage = [];
  } else {
    pokedexStorage = localStorage.getItem('pokedex');
    pokedexStorage = JSON.parse(pokedexStorage);
  }

  const navigate = useNavigate();
  const pathParams = useParams();
  const [currentPage, setCurrentPage] = useState(0);
  const [pokemon, isLoading, error] = useRequestData(
    `${URL_BASE}pokemon?limit=20&offset=${pathParams.page}`,
  );
  const [pokedexList, setPokedexList] = useState(pokedexStorage);

  const pagination = [];
  const pageNumber = 1126 / 20;

  for (let i = 0; i < Math.ceil(pageNumber); i++) {
    pagination.push(i);
  }

  const pages = pagination
    .filter((page) => {
      return page < currentPage + 3 && page > currentPage - 3;
    })
    .map((page) => {
      if (currentPage !== page) {
        return (
          <p
            onClick={() => {
              changePokemonPage(page, navigate, setCurrentPage);
            }}
            key={Math.random()}
          >
            {page + 1}
          </p>
        );
      } else {
        return (
          <h4
            onClick={() => {
              changePokemonPage(page, navigate, setCurrentPage);
            }}
            key={Math.random()}
          >
            {page + 1}
          </h4>
        );
      }
    });

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

  const pokemonList =
    pokemon &&
    pokemon.results.map((pokemon) => {
      return (
        <PokemonCard
          key={pokemon.url}
          pokemonUrl={pokemon.url}
          addPokedex={addPokedex}
          removePokedex={removePokedex}
          pokedexList={pokedexList}
        ></PokemonCard>
      );
    });

  const home = (
    <div>
      <PokemonDetailNavBar>
        <h1>POKEMON - GOTTA CATCH 'EM ALL!</h1>
        <ButtonHomeStyled
          onClick={() => {
            goToPokedex(navigate);
          }}
        >
          POKEDEX
        </ButtonHomeStyled>
      </PokemonDetailNavBar>
      {!isLoading && error && <p>ERROR!</p>}
      {isLoading && <p>LOADING...</p>}
      {!isLoading && pokemon && (
        <div>
          <Pagination>{pages}</Pagination>
          <PokemonList>{pokemonList}</PokemonList>
          <Pagination>{pages}</Pagination>
        </div>
      )}
    </div>
  );

  return <>{home}</>;
}

export default Home;
