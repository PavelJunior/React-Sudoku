import React, { MouseEvent } from 'react';
import './style.css';

interface SuccessModalProps {
  open: Boolean;
  restartGame: Function;
}

export const SuccessModal: React.FC<SuccessModalProps> = ({
  open,
  restartGame,
}) => {
  const styles = open ? 'modal' : 'modal modal-hidden';

  const onRestartPress = () => {
    restartGame();
  };

  return (
    <div className={styles}>
      <h3>Great job! You solved the puzzle!</h3>
      <p>Do you want to play again?</p>
      <button onClick={onRestartPress}>Play more</button>
    </div>
  );
};
