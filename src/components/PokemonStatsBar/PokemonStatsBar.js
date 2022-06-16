import React from 'react';
import { ContainerStyles } from '../PokemonStats/PokemonStatsStyled';

const PokemonStatsBar = (props) => {
  const { name, completed } = props;

  const fillerStyles = {
    width: `${completed}%`,
    backgroundColor: '#29B4F1',
    borderRadius: 'inherit',
    textAlign: 'left',
    height: '5px',
    maxWidth: '98%',
  };

  return (
    <div>
      <p>
        {name}: {completed}
      </p>
      <ContainerStyles>
        <div style={fillerStyles}>
          <span>.</span>
        </div>
      </ContainerStyles>
    </div>
  );
};

export default PokemonStatsBar;
