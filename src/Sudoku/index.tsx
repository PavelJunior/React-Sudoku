import React, { useEffect, useState } from 'react';
import { SudokuItem } from '../SudokuItem';
import { puzzles } from '../Puzzles';
import { SuccessModal } from '../SuccessModal';

import './style.css';

export const Sudoku: React.FC = () => {
  const [board, setBoard] = useState<SudokuBoard>([]);
  const [solved, setSolved] = useState<Boolean>(false);

  useEffect(() => {
    getBoard();
  }, []);

  const getBoard = () => {
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
  };

  const restartGame = () => {
    getBoard();
    setSolved(false);
  };

  const changeSudokuItem: ChangeItem = (coordinates, newValue) => {
    const x = coordinates[0];
    const y = coordinates[1];

    let newBoard: SudokuBoard = [];
    board.map((row: SudokuRow) => {
      newBoard.push([...row]);
    });

    newBoard[x][y].value = newValue;
    setBoard(newBoard);

    isSolved();
  };

  const isSolved = () => {
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        if (board[i][j].value === 0) {
          console.log('Not filled');
          return false;
        }
      }
    }

    for (let i = 0; i < 9; i++) {
      let row = [];

      for (let j = 0; j < 9; j++) {
        row.push(board[i][j].value);
      }

      if (new Set(row).size !== 9) {
        console.log('Error in row ' + (i + 1));
        return false;
      }
    }

    for (let i = 0; i < 9; i++) {
      let column = [];

      for (let j = 0; j < 9; j++) {
        column.push(board[j][i].value);
      }

      if (new Set(column).size !== 9) {
        console.log('Error in column ' + (i + 1));
        return false;
      }
    }

    for (let yStart = 0; yStart < 9; yStart += 3) {
      for (let xStart = 0; xStart < 9; xStart += 3) {
        let square = [];
        for (let y = yStart; y < yStart + 3; y++) {
          for (let x = xStart; x < xStart + 3; x++) {
            square.push(board[x][y].value);
          }
        }
        if (new Set(square).size !== 9) {
          console.log(
            `Error in square ${xStart}x${yStart} - ${xStart + 3}x${yStart + 3}`
          );
          return false;
        }
      }
    }

    setSolved(true);
  };

  return (
    <>
      <table>
        <tbody>
          {board.map((row: SudokuRow, xIndex: number) => (
            <tr key={xIndex}>
              {row.map((item: SudokuItemType, yIndex: number) => (
                <td key={(xIndex + 1) * (yIndex + 1)}>
                  <SudokuItem
                    item={item}
                    changeSudokuItem={changeSudokuItem}
                    coordinates={[xIndex, yIndex]}
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <SuccessModal open={solved} restartGame={restartGame} />
    </>
  );
};
