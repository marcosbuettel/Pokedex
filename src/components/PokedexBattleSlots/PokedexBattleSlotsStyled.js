import styled from 'styled-components';
import battle from '../../assets/battle2.png';
import win from '../../assets/win.png';

export const PokedexBattleSlotStyled = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
  flex-wrap: wrap;

  > img {
    width: 80px;
  }

  @media screen and (max-width: 900px) {
    flex-direction: column;
    justify-content: center;
  }
`;

export const PokedexBattleSlotBox = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.7)),
    url(${battle});
  border: 5px solid #f14129;
  border-radius: 5px;
  background-size: cover;
  background-position: center;
  width: 280px;
  min-width: 280px;
  min-height: 200px;
  padding: 30px;
  color: white;
  font-size: 30px;
  font-weight: bold;
  margin: 20px 0;
`;

export const PokedexBattleFinish = styled.div`
  background-image: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url(${win});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  font-size: 34px;
  font-weight: bold;
  padding: 80px 0;
`;
