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
    if (e.target.value.length === 0) {
      changeSudokuItem(coordinates, 0);
    }

    const newValue = parseInt(e.target.value.slice(-1));
    if (!isNaN(newValue)) {
      changeSudokuItem(coordinates, newValue);
    }
  };

  return (
    <input
      type="text"
      className="item"
      value={item != 0 ? item! : null!}
      onChange={changeItemValue}
    />
  );
};
