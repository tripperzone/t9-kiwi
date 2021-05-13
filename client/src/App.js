import styled from 'styled-components';
import './App.css';

import { Keypad, Screen, Tools } from './components';

const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 15vh;
`
const App = () => {
  return (
    <AppContainer>
      <Keypad/>
      <Screen/>
      <Tools/>
    </AppContainer>
  );
}

export default App;
