import React, { useState } from 'react';
import { Sudoku } from '../Sudoku';
import { SolvedModal } from '../SolvedModal';
import { ChooseSettingsModal } from '../ChooseSettingsModal';
import { RestartGameModal } from '../RestartGameModal';

import { Button } from '@material-ui/core';
import './style.css';

export const Game: React.FC = () => {
  const [solved, setSolved] = useState<boolean>(false);
  const [difficulty, setDifficulty] = useState<string>('');
  const [showMistakes, setShowMistakes] = useState<boolean>(true);
  const [restartModal, setRestartModal] = useState<boolean>(false);

  const restartGame = () => {
    setDifficulty('');
    setSolved(false);
    setRestartModal(false);
  };

  const applySettings = (difficulty: string, showMistakes: boolean) => {
    setDifficulty(difficulty);
    setShowMistakes(showMistakes);
  };

  const openRestartModal = () => {
    setRestartModal(true);
  };

  const closeRestartModal = () => {
    setRestartModal(false);
  };

  return difficulty != '' ? (
    <div className="container">
      <Button variant="contained" onClick={openRestartModal}>
        New Game
      </Button>
      <Sudoku
        showMistakes={showMistakes}
        setSolved={setSolved}
        difficulty={difficulty}
      />
      <SolvedModal open={solved} restartGame={restartGame} />
      <RestartGameModal
        open={restartModal}
        closeModal={closeRestartModal}
        restartGame={restartGame}
      />
    </div>
  ) : (
    <ChooseSettingsModal open={true} applySettings={applySettings} />
  );
};
