import React, { useEffect, useState } from 'react';
import { Sudoku } from './Sudoku';
import { puzzles } from './Puzzles';

function App() {
  const [board, setBoard] = useState<SudokuBoard>([]);

  useEffect(() => {
    let newBoard: SudokuBoard = [];
    const puzzle = puzzles[Math.floor(Math.random() * 100)];

    for (let i = 0; i < 9; i++) {
      let row: SudokuRow = [];
      for (let j = 0; j < 9; j++) {
        const value = parseInt(puzzle[i * 9 + j]);
        const isPermanent = value !== 0;
        row.push({ value: value, permanent: isPermanent });
      }
      newBoard.push(row);
    }

    setBoard(newBoard);
  }, []);

  const changeSudokuItem: ChangeItem = (coordinates, newValue) => {
    const x = coordinates[0];
    const y = coordinates[1];

    let newBoard: SudokuBoard = [];
    board.map((row: SudokuRow) => {
      newBoard.push([...row]);
    });

    newBoard[x][y].value = newValue;
    setBoard(newBoard);
  };

  return <Sudoku board={board} changeSudokuItem={changeSudokuItem} />;
}

export default App;
