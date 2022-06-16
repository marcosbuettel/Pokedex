import styled from 'styled-components';
import bgCard from '../../assets/bg5.jpg';

export const PokemonDetailStyled = styled.div`
  background-color: rgba(255, 255, 255, 0.2);
  padding: 10px;
  color: black;
  width: 80%;
  margin: 0 auto;

  > div {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }

  @media screen and (max-width: 900px) {
    text-align: center;
    width: 95%;
    > div {
      justify-content: center;
    }
  }
`;

export const PokemonDetailNavBar = styled.div`
  display: flex;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.2);
  justify-content: space-between;
  padding: 10px;
  color: white;
  margin-bottom: 20px;
  border-radius: 5px;

  @media screen and (max-width: 900px) {
    flex-direction: column;
    text-align: center;

    h1 {
      font-size: 24px;
      margin: 10px 0;
    }
  }
`;

export const PokemonDetailInfoBox = styled.div`
  background-color: white;
  text-align: center;
  border-radius: 5px;
  padding: 10px;
  height: fit-content;
  color: black;
  margin-bottom: 10px;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 40px;
    margin-right: 10px;
  }

  > p {
    margin: 0 !important;
    margin-left: 10px !important;
  }

  p {
    margin: 20px 0;
  }

  div {
    padding: 10px 40px 5px 40px;
  }

  div h2 {
    font-size: 36px;
  }

  div p {
    font-size: 24px;
  }

  @media screen and (max-width: 900px) {
    margin: 20px auto;
  }
`;

export const PokemonDetailSprite = styled.div`
  background-image: linear-gradient(
      rgba(255, 255, 255, 0.4),
      rgba(255, 255, 255, 0.4)
    ),
    url(${bgCard});
  background-size: cover;
  background-position: center;
  padding: 20px;
  width: fit-content;
  margin-bottom: 20px;
  border-radius: 5px;
  img {
    width: 230px;
  }
`;

export const PokemonDetailStats = styled.div`
  > div {
    padding: 10px 45px 10px 45px;
  }

  p {
    font-size: 18px;
    margin-top: 18px;
  }
`;
