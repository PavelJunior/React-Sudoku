import React, { useEffect, useState } from 'react';
import { SudokuItem } from '../SudokuItem';
import { puzzles } from '../Puzzles';
import { SuccessModal } from '../SuccessModal';

import './style.css';

export const Sudoku: React.FC = () => {
  const [board, setBoard] = useState<SudokuBoard>([]);
  const [mistakes, setMistakes] = useState<Mistakes>([]);
  const [solved, setSolved] = useState<Boolean>(false);
  const [difficulty, setDifficulty] = useState<string>('intermediate');
  const [showMistakes, setShowMistakes] = useState<Boolean>(false);

  useEffect(() => {
    getBoard();
  }, []);

  const getBoard = () => {
    let newBoard: SudokuBoard = [];
    let newMistakes: Mistakes = [];
    const puzzle = puzzles[difficulty][Math.floor(Math.random() * 30)];

    for (let i = 0; i < 9; i++) {
      let row: SudokuRow = [];
      let mistakesRow: MistakesRow = [];
      for (let j = 0; j < 9; j++) {
        const value = parseInt(puzzle[i * 9 + j]);
        const isPermanent = value !== 0;
        row.push({ value: value, permanent: isPermanent });
        mistakesRow.push(false);
      }
      newBoard.push(row);
      newMistakes.push(mistakesRow);
    }

    setBoard(newBoard);
    setMistakes(newMistakes);
  };

  const restartGame = () => {
    getBoard();
    setSolved(false);
  };

  const changeSudokuItem: ChangeItem = (coordinates, newValue) => {
    const x = coordinates[0];
    const y = coordinates[1];

    let newBoard: SudokuBoard = [];

    board.forEach((row: SudokuRow) => {
      return newBoard.push([...row]);
    });

    newBoard[x][y].value = newValue;
    setBoard(newBoard);

    checkSudokuForErrors();
  };

  const checkGroup = (group: CheckGroup, mistakes: TemporaryMistakes) => {
    let newBoardSolved = true;
    if (new Set(group.map((i: CheckItem) => i.value)).size !== group.length) {
      newBoardSolved = false;

      group.forEach((item: CheckItem) => {
        const elements = group.filter(
          (i: CheckItem) => i.value === item.value && item.value !== 0
        );
        if (elements.length > 1) {
          elements.forEach((el: CheckItem) => {
            mistakes.push(el.coordinates);
          });
        }
      });
    }

    return newBoardSolved;
  };

  const checkSudokuForErrors = () => {
    let temporaryMistakes: TemporaryMistakes = [];
    let newMistakes: Mistakes = [];
    let allFieldFilled = true;

    // check that Sudoku don't have empty fields and fill array of arrays for mistakes with default values
    for (let y = 0; y < 9; y++) {
      let mistakeRow: MistakesRow = [];
      for (let x = 0; x < 9; x++) {
        mistakeRow.push(false);
        if (board[y][x].value === 0) {
          allFieldFilled = false;
        }
      }
      newMistakes.push(mistakeRow);
    }

    // check for mistakes in rows and columns
    for (let y = 0; y < 9; y++) {
      let row: CheckGroup = [];
      let column: CheckGroup = [];
      for (let x = 0; x < 9; x++) {
        column.push({ value: board[y][x].value, coordinates: [y, x] });
        row.push({ value: board[y][x].value, coordinates: [y, x] });
      }

      checkGroup(row, temporaryMistakes);
      checkGroup(column, temporaryMistakes);
    }

    // check for mistakes in squares
    for (let yStart = 0; yStart < 9; yStart += 3) {
      for (let xStart = 0; xStart < 9; xStart += 3) {
        let square: CheckGroup = [];
        for (let y = yStart; y < yStart + 3; y++) {
          for (let x = xStart; x < xStart + 3; x++) {
            square.push({ value: board[y][x].value, coordinates: [y, x] });
          }
        }
        checkGroup(square, temporaryMistakes);
      }
    }

    // if all fields are filled and no errors were found game is complete
    setSolved(allFieldFilled && temporaryMistakes.length === 0);

    // covert mistakes to a proper format and put in state
    temporaryMistakes.forEach((mistake: Coordinates) => {
      const y = mistake[0];
      const x = mistake[1];
      if (!board[y][x].permanent) {
        newMistakes[y][x] = true;
      }
    });

    setMistakes(newMistakes);
  };

  return (
    <>
      <table>
        <tbody>
          {board.map((row: SudokuRow, yIndex: number) => (
            <tr key={yIndex}>
              {row.map((item: SudokuItemType, xIndex: number) => (
                <td key={(yIndex + 1) * (xIndex + 1)}>
                  <SudokuItem
                    item={item}
                    changeSudokuItem={changeSudokuItem}
                    coordinates={[yIndex, xIndex]}
                    isMistake={mistakes[yIndex][xIndex]}
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
