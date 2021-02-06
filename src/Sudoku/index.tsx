import React from 'react';
import { SudokuItem } from '../SudokuItem';

import './style.css';

interface SudokuProps {
  board: SudokuBoard;
  changeSudokuItem: ChangeItem;
}

export const Sudoku: React.FC<SudokuProps> = ({ board, changeSudokuItem }) => {
  return (
    <table>
      {board.map((row: SudokuRow, xIndex: number) => (
        <tr>
          {row.map((item: SudokuItemType, yIndex: number) => (
            <td>
              <SudokuItem
                item={item}
                changeSudokuItem={changeSudokuItem}
                coordinates={[xIndex, yIndex]}
              />
            </td>
          ))}
        </tr>
      ))}
    </table>
  );
};
