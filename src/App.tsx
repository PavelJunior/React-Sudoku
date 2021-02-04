import React, { useEffect, useState } from 'react';
import { Sudoku } from './Sudoku';

function App() {
  const [board, setBoard] = useState<SudokuBoard>([]);

  useEffect(() => {
    const createBoard = () => {
      let newBoard: SudokuBoard = [];

      for (let i = 0; i < 9; i++) {
        let row: SudokuRow = [];
        for (let j = 0; j < 9; j++) {
          row.push(Math.floor(Math.random() * 10));
        }
        newBoard.push(row);
      }

      newBoard[2][2] = null;
      newBoard[3][5] = null;
      newBoard[6][6] = null;

      setBoard(newBoard);
    };

    createBoard();
  }, []);

  const changeSudokuItem: ChangeItem = (coordinates, newValue) => {
    const x = coordinates[0];
    const y = coordinates[1];

    let newBoard: SudokuBoard = [];
    board.map((row: SudokuRow) => {
      newBoard.push([...row]);
    });

    newBoard[x][y] = newValue;
    setBoard(newBoard);
  };

  return <Sudoku board={board} changeSudokuItem={changeSudokuItem} />;
}

export default App;
