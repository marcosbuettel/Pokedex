import styled from 'styled-components';
import pokeballOpen from '../../assets/pokeball-open.png';
import bg from '../../assets/bg5.jpg';

export const PokedexBattleStyled = styled.div`
  background-image: linear-gradient(
      rgba(255, 255, 255, 0.7),
      rgba(255, 255, 255, 0.7)
    ),
    url(${bg});
  background-size: cover;
  width: 80%;
  background-color: white;
  position: fixed;
  top: 10%;
  left: 50%;
  margin-left: -40%;
  color: black;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 900px) {
    position: absolute;
    top: 0;
    left: 0;
    margin-left: 0;
    width: 100%;
    background-color: black;
  }
`;

export const PokedexBattleHeader = styled.div`
  background-color: #29b4f1;
  width: 100%;
  height: 40px;
  color: white;
  padding: 10px 20px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    width: 20px;
    cursor: pointer;
  }
`;

export const PokedexBattleList = styled.div`
  overflow-x: scroll;
  padding: 20px 0;
  max-height: 200px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
  margin-bottom: 40px;
`;

export const PokedexBattleSelected = styled.div`
  background-image: url(${pokeballOpen});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  width: fit-content;
  margin: 10px;
  cursor: pointer;
`;

export const PokedexBattleNoSelected = styled.div`
  margin: 10px;

  img {
    width: 80px;
    cursor: pointer;
  }
`;
