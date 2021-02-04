import React from 'react';
import { Sudoku } from './Sudoku';

const createBoard = () => {
  let board = [];
  for (let i = 0; i < 9; i++) {
    let row = [];
    for (let j = 0; j < 9; j++) {
      row.push(Math.floor(Math.random() * 10));
    }
    board.push(row);
  }

  return board;
};

function App() {
  return <Sudoku board={createBoard()} />;
}

export default App;
