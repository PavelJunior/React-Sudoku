import React, { ChangeEvent, useState } from 'react';
import { Modal } from '../Modal';
import {
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
} from '@material-ui/core';
import Switch from 'react-switch';

interface SuccessModalProps {
  open: Boolean;
  applySettings: Function;
}

export const ChooseDifficultyModal: React.FC<SuccessModalProps> = ({
  open,
  applySettings,
}) => {
  const [temporaryDifficulty, setTemporaryDifficulty] = useState(
    'intermediate'
  );
  const [temporaryShowMistakes, setTemporaryShowMistakes] = useState(false);

  const handleDifficultyChange = (e: ChangeEvent<HTMLInputElement>) => {
    open = false;
    setTemporaryDifficulty(e.target.value);
  };

  const handleShowMistakesChange = () => {
    setTemporaryShowMistakes(!temporaryShowMistakes);
  };

  return (
    <Modal
      open={open}
      children={
        <>
          <h3>Choose difficulty</h3>

          <FormControl component="fieldset">
            <RadioGroup
              name="difficulty"
              value={temporaryDifficulty}
              onChange={handleDifficultyChange}
            >
              <FormControlLabel value="easy" control={<Radio />} label="Easy" />
              <FormControlLabel
                value="intermediate"
                control={<Radio />}
                label="Intermediate"
              />
              <FormControlLabel value="hard" control={<Radio />} label="Hard" />
            </RadioGroup>
          </FormControl>
          <p>
            Show Mistakes:{' '}
            <Switch
              onChange={handleShowMistakesChange}
              checked={temporaryShowMistakes}
            />
          </p>

          <div>
            <button
              onClick={() =>
                applySettings(temporaryDifficulty, temporaryShowMistakes)
              }
            >
              Start Game!
            </button>
          </div>
        </>
      }
    />
  );
};
