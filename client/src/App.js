import styled from 'styled-components';
import './App.css';

import { Keypad, Screen, Suggestions } from './components';

const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 5vh;
`;

const ControlContainer = styled.div`
  flex: 1;
  max-width: 300px;
  border: 1px #CCCCCC solid;
`;

const ResultsContainer = styled.div`
  flex: 2;
`;

const App = () => {
  return (
    <AppContainer>
      <ControlContainer>
        <Screen/>
        <Keypad/>
      </ControlContainer>
      <ResultsContainer>
        <Suggestions/>
      </ResultsContainer>
    </AppContainer>
  );
}

export default App;
