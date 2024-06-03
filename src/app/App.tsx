import React from 'react';
import { BattleGround } from '../features/battleGround/BattleGround';
import styled from '@emotion/styled'

const Container = styled.div`
  display: flex;
  justify-content: center
`

function App() {
  return (
  <Container>
    <BattleGround/>
  </Container>
  );
}

export default App;
