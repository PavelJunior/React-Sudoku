import React from 'react';
import { SudokuItem } from '../SudokuItem';

import './style.css';

interface SudokuProps {
  board: SudokuBoard;
  changeSudokuItem: ChangeItem;
}

export const Sudoku: React.FC<SudokuProps> = ({ board, changeSudokuItem }) => {
  return (
    <div className="board">
      {board.map((row: SudokuRow, xIndex: number) => (
        <div className="row">
          {row.map((item: SudokuItemType, yIndex: number) => (
            <SudokuItem
              item={item}
              changeSudokuItem={changeSudokuItem}
              coordinates={[xIndex, yIndex]}
            />
          ))}
        </div>
      ))}
    </div>
  );
};
