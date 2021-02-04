import React from 'react';

import './style.css';

interface SudokuProps {
  board: SudokuBoard;
}

export const Sudoku: React.FC<SudokuProps> = ({ board }) => {
  return (
    <div className="board">
      {board.map((row: SudokuRow) => (
        <div className="row">
          {row.map((item: SudokuItem) => (
            <div className="item">{item}</div>
          ))}
        </div>
      ))}
    </div>
  );
};
