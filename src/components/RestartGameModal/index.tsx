import React from 'react';
import { Modal } from '../Modal';

import { Button } from '@material-ui/core';
import './style.css';

interface RestartGameModalProps {
  open: Boolean;
  closeModal: Function;
  restartGame: Function;
}

export const RestartGameModal: React.FC<RestartGameModalProps> = ({
  open,
  closeModal,
  restartGame,
}) => {
  const onRestartPress = () => {
    restartGame();
  };

  const onCancelPress = () => {
    closeModal();
  };

  return (
    <Modal
      open={open}
      children={
        <>
          <h3>Are you sure?</h3>
          <p>Current game progress will be erased</p>
          <div className="modal-buttons">
            <Button variant="contained" onClick={onCancelPress}>
              Cancel
            </Button>
            <Button variant="contained" onClick={onRestartPress}>
              Start New Game
            </Button>
          </div>
        </>
      }
    />
  );
};
