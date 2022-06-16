import styled from 'styled-components';
import pokeballOpen from '../../assets/pokeball-open.png';
import pokeballClosed from '../../assets/pokeball-closed.png';
import bgCard from '../../assets/bg2.jpg';

export const PokemonCardStyled = styled.section`
  display: flex;
  flex-direction: column;
  background-image: linear-gradient(
      rgba(205, 205, 205, 0.7),
      rgba(205, 205, 205, 0.7)
    ),
    url(${bgCard});
  background-size: cover;
  background-position: center;
  min-width: 15%;
  max-width: 15%;
  color: black;
  padding: 5px;

  img {
    cursor: pointer;
  }

  @media screen and (max-width: 1200px) {
    min-width: 280px;
  }
`;

export const CardBoxInfo = styled.div`
  background-color: white;
  padding: 10px;
  text-align: center;
  margin-bottom: 20px;

  div {
    display: flex;
    justify-content: center;
  }

  div > p:nth-child(1) {
    margin-right: 10px;
  }
`;

export const PokemonSpriteBackground = styled.div`
  background-image: url(${pokeballOpen});
  background-position: center;
  background-size: 50%;
  background-repeat: no-repeat;
  padding: 40px;
  display: flex;
  justify-content: center;
`;

export const PokemonSpriteBackgroundPokedex = styled.div`
  background-image: url(${pokeballClosed});
  background-position: center;
  background-size: 50%;
  background-repeat: no-repeat;
  padding: 40px;
  display: flex;
  justify-content: center;

  div {
    height: 96px;
    cursor: pointer;
  }
`;

export const PokemonCardButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;

  button {
    color: white;
    cursor: pointer;
    padding: 10px 5px;
    border: none;
    min-width: fit-content;
  }
`;
