import React from 'react';
import { useRequestData } from '../../hooks/useRequestData';
import { useNavigate, useParams } from 'react-router-dom';
import {
  PokemonCardStyled,
  PokemonSpriteBackground,
  PokemonSpriteBackgroundPokedex,
  PokemonCardButtons,
  CardBoxInfo,
} from './PokemonCardStyled';
import { goToPokemonDetailPage } from '../Coordinator/Coordinator';
import { AddPokedex, RemovePokedex } from '../ActionButtons/ActionButtons';
import { DetailPokedexStyled } from '../ActionButtons/ActionButtonsStyled';
import { PokemonStats } from '../PokemonStats/PokemonStats';
import PokemonType from '../PokemonType/PokemonType';

const PokemonCard = (props) => {
  const navigate = useNavigate();
  const pathParams = useParams();
  const dexVerify = pathParams.dexfilter;
  const [pokemonStats] = useRequestData(props.pokemonUrl);
  var dexFilter;

  const pokemonFilter = props.pokedexList.map((pokemon) => {
    return pokemon.name;
  });

  if (dexVerify !== 'pokedex') {
    dexFilter = pokemonStats && !pokemonFilter.includes(pokemonStats.name);
  } else {
    dexFilter = pokemonStats && pokemonFilter.includes(pokemonStats.name);
  }

  var pokemonCard;

  if (dexFilter) {
    pokemonCard = pokemonStats && (
      <PokemonCardStyled>
        <CardBoxInfo>
          <h3>{pokemonStats.name.toUpperCase()}</h3>
          <div>
            <PokemonType type={pokemonStats.types[0]['type'].name} />
            {pokemonStats.types[1] && (
              <PokemonType type={pokemonStats.types[1]['type'].name} />
            )}
          </div>
        </CardBoxInfo>

        {!pokemonFilter.includes(pokemonStats.name) && (
          <PokemonSpriteBackground>
            <img
              onClick={() => {
                goToPokemonDetailPage(navigate, pokemonStats.id);
              }}
              alt="Detalhes do Pokemon"
              src={pokemonStats.sprites.front_default}
            />
          </PokemonSpriteBackground>
        )}

        {pokemonFilter.includes(pokemonStats.name) && (
          <PokemonSpriteBackground>
            <img
              onClick={() => {
                goToPokemonDetailPage(navigate, pokemonStats.id);
              }}
              alt="Detalhes do Pokemon"
              src={pokemonStats.sprites.front_default}
            />
          </PokemonSpriteBackground>
        )}

        <PokemonStats pokemonStats={pokemonStats} />

        <PokemonCardButtons>
          {!pokemonFilter.includes(pokemonStats.name) && (
            <AddPokedex
              addPokedex={props.addPokedex}
              pokemonStatsId={pokemonStats}
            />
          )}

          {pokemonFilter.includes(pokemonStats.name) && (
            <RemovePokedex
              removePokedex={props.removePokedex}
              pokemonStatsId={pokemonStats.id}
            />
          )}

          <DetailPokedexStyled
            onClick={() => {
              goToPokemonDetailPage(navigate, pokemonStats.id);
            }}
          >
            DETAILS
          </DetailPokedexStyled>
        </PokemonCardButtons>
      </PokemonCardStyled>
    );
  } else {
    pokemonCard = pokemonStats && (
      <PokemonCardStyled>
        <CardBoxInfo>
          <h3>{pokemonStats.name.toUpperCase()}</h3>
          <div>
            <PokemonType type={pokemonStats.types[0]['type'].name} />
            {pokemonStats.types[1] && (
              <PokemonType type={pokemonStats.types[1]['type'].name} />
            )}
          </div>
        </CardBoxInfo>

        <PokemonSpriteBackgroundPokedex>
          <div
            onClick={() => {
              goToPokemonDetailPage(navigate, pokemonStats.id);
            }}
          ></div>
        </PokemonSpriteBackgroundPokedex>

        <PokemonStats pokemonStats={pokemonStats} />

        <PokemonCardButtons>
          {pokemonFilter.includes(pokemonStats.name) && (
            <RemovePokedex
              removePokedex={props.removePokedex}
              pokemonStatsId={pokemonStats.id}
            />
          )}
          <DetailPokedexStyled
            onClick={() => {
              goToPokemonDetailPage(navigate, pokemonStats.id);
            }}
          >
            DETAILS
          </DetailPokedexStyled>
        </PokemonCardButtons>
      </PokemonCardStyled>
    );
  }

  return <>{pokemonCard}</>;
};

export default PokemonCard;
