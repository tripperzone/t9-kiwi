import styled from 'styled-components';
import './App.css';

import { Keypad, Screen } from './components';

const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 5vh;
`;

const ControlContainer = styled.div`
  flex-grow: 1;
`;

const ResultsContainer = styled.div`
  flex-grow: 2;
`;

const App = () => {
  return (
    <AppContainer>
      <ControlContainer>
        <Screen/>
        <Keypad/>
      </ControlContainer>
      <ResultsContainer>
        
      </ResultsContainer>
    </AppContainer>
  );
}

export default App;
