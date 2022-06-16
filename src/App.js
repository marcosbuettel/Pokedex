import Router from './routes/Router';
import styled from 'styled-components';

const AppStyled = styled.div`
  background-size: cover;
  background-position: center;
  color: white;
  max-width: 1480px;
  margin: 0 auto;
`;

function App() {
  return (
    <AppStyled>
      <Router />
    </AppStyled>
  );
}

export default App;
