import React, { createContext } from 'react';
import * as Multistep from './Multisteps/Multistep'



function App() {
  return (
    <Multistep.Multistep>
      <Multistep.Controls />
      <Multistep.Page pageIndex={1}>Page 1</Multistep.Page>
      <Multistep.Page pageIndex={2}>Page 2</Multistep.Page>
      <Multistep.Page pageIndex={3}>Page 3</Multistep.Page>
    </Multistep.Multistep>
  );
}

export default App;

