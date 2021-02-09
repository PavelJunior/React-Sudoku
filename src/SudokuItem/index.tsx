import React, { ChangeEvent } from 'react';

import './style.css';

interface SudokuItemProps {
  item: SudokuItemType;
  changeSudokuItem: ChangeItem;
  coordinates: Coordinates;
  isMistake: boolean;
}

export const SudokuItem: React.FC<SudokuItemProps> = ({
  item,
  changeSudokuItem,
  coordinates,
  isMistake,
}) => {
  const changeItemValue = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length === 0) {
      changeSudokuItem(coordinates, 0);
    }

    const newDigitIndex = e.target.value.indexOf('' + item.value) === 0 ? 1 : 0;
    const newValue = parseInt(e.target.value[newDigitIndex]);

    if (!isNaN(newValue)) {
      changeSudokuItem(coordinates, newValue);
    }
  };

  const mainInputStyle = item.permanent ? 'item item-permanent' : 'item';
  const mistakeInputStyle = isMistake ? 'item-mistake' : '';
  const componentStyle = mainInputStyle + ' ' + mistakeInputStyle;

  return (
    <input
      type="text"
      className={componentStyle}
      value={item.value !== 0 ? item.value : ''}
      onChange={changeItemValue}
      disabled={item.permanent}
    />
  );
};
