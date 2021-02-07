import React from 'react';
import './style.css';

interface SuccessModalProps {
  open: Boolean;
  restartGame: Function;
}

export const SuccessModal: React.FC<SuccessModalProps> = ({
  open,
  restartGame,
}) => {
  const modalStyles = open ? 'modal' : 'modal modal-hidden';
  const overlayStyles = open ? 'overlay' : '';

  const onRestartPress = () => {
    restartGame();
  };

  return (
    <>
      <div className={overlayStyles}>
        <div className={modalStyles}>
          <h3>Great job! You solved the puzzle!</h3>
          <div>
            <p>Do you want to play again?</p>
            <button onClick={onRestartPress}>Play again</button>
          </div>
        </div>
      </div>
    </>
  );
};
