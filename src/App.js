import React from 'react';
import { DndProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import GlobalStyles from './styles/global';
import Header from './components/header';
import Board from './components/board';

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <Header />
      <Board />

      <GlobalStyles />
    </DndProvider>
  );
}

export default App;
