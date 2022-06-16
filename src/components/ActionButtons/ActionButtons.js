import { useNavigate } from 'react-router-dom';
import { backPage } from '../Coordinator/Coordinator';
import {
  AddPokedexStyled,
  RemovePokedexStyled,
  BackPageButtonStyled,
} from './ActionButtonsStyled';

export const BackPageButton = () => {
  const navigate = useNavigate();

  return (
    <BackPageButtonStyled
      onClick={() => {
        backPage(navigate);
      }}
    >
      BACK
    </BackPageButtonStyled>
  );
};

export const AddPokedex = (props) => {
  return (
    <AddPokedexStyled
      onClick={() => {
        props.addPokedex(props.pokemonStatsId);
      }}
    >
      ADD POKEDEX
    </AddPokedexStyled>
  );
};

export const RemovePokedex = (props) => {
  return (
    <RemovePokedexStyled
      onClick={() => {
        props.removePokedex(props.pokemonStatsId);
      }}
    >
      REMOVE POKEDEX
    </RemovePokedexStyled>
  );
};
