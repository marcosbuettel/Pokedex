import styled from 'styled-components';

export const PokemonList = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  section {
    margin: 40px 2%;
    text-align: center;
  }
`;

export const Pagination = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background-color: rgba(201, 201, 201, 0.4);
  width: fit-content;
  margin: 0 auto;
  border-radius: 5px;
  padding: 5px 10px;

  p {
    cursor: pointer;
    font-size: 30px;
    margin: 0 20px;
  }

  h4 {
    cursor: pointer;
    font-size: 30px;
    margin: 0 20px;
    color: #29b4f1;
  }
`;

export const ButtonHomeStyled = styled.button`
  background-color: #29b4f1;
  font-size: 24px;
  border: none;
  color: white;
  padding: 5px 10px;
  font-weight: bold;
  cursor: pointer;
`;
