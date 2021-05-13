import React, { Suspense, lazy } from 'react';
import styled from 'styled-components';
import './App.css';
import "@fortawesome/fontawesome-free/css/all.css";

const { Keypad, Screen, Tools } = lazy(() => import('./components'));

const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 15vh;
`
function App() {
  return (
    <AppContainer>
      <Suspense fallback={<div>Loading...</div>}>
        <Keypad/>
        <Screen/>
        <Tools/>
      </Suspense>
    </AppContainer>
  );
}

export default App;
