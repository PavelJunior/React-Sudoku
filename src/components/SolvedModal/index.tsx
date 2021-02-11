import React from 'react';
import { Modal } from '../Modal';
import { Button } from '@material-ui/core';

interface SolvedProps {
  open: Boolean;
  restartGame: Function;
}

export const SolvedModal: React.FC<SolvedProps> = ({ open, restartGame }) => {
  const onRestartPress = () => {
    restartGame();
  };

  return (
    <Modal
      open={open}
      children={
        <>
          <h3>Great job! You solved the puzzle!</h3>
          <div>
            <p>Do you want to play again?</p>
            <Button variant="contained" onClick={onRestartPress}>
              Play again
            </Button>
          </div>
        </>
      }
    />
  );
};
