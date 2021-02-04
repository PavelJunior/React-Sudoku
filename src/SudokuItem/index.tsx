import React, { ChangeEvent } from 'react';

import './style.css';

interface SudokuItemProps {
  item: SudokuItemType;
  changeSudokuItem: ChangeItem;
  coordinates: Coordinates;
}

export const SudokuItem: React.FC<SudokuItemProps> = ({
  item,
  changeSudokuItem,
  coordinates,
}) => {
  const changeItemValue = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(e.target.value.slice(-1));
    if (!isNaN(newValue)) {
      changeSudokuItem(coordinates, newValue);
    }
  };

  return (
    <input
      type="text"
      className="item"
      value={item!}
      onChange={changeItemValue}
    />
  );
};
