import React from 'react';
import { Modal } from '../Modal';

interface SuccessModalProps {
  open: Boolean;
  restartGame: Function;
}

export const SolvedModal: React.FC<SuccessModalProps> = ({
  open,
  restartGame,
}) => {
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
            <button onClick={onRestartPress}>Play again</button>
          </div>
        </>
      }
    />
  );
};
