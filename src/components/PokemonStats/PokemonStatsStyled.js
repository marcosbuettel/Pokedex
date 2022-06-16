import styled from 'styled-components';

export const PokemonStatsStyled = styled.div`
  padding: 10px 15px 10px 15px;
  height: fit-content;
  margin: 10px 0;
  font-weight: bold;
  background-color: white;
  border-radius: 5px;

  div {
    margin-top: 5px;
  }

  p {
    font-size: 12px;
    margin-bottom: 3px;
  }

  span {
    font-size: 1px;
    color: white;
  }
`;

export const ContainerStyles = styled.div`
  width: 100%;
  background-color: #e0e0de;
  border-radius: 50;
  height: 5px;
  margin-bottom: 10px;
`;

export const labelStyles = {
  padding: 5,
  color: 'white',
  fontWeight: 'bold',
};
