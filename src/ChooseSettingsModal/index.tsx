import React, { ChangeEvent, useState } from 'react';
import { Modal } from '../Modal';
import {
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button,
  Switch,
} from '@material-ui/core';

interface ChooseSettingsModalProps {
  open: Boolean;
  applySettings: Function;
}

export const ChooseSettingsModal: React.FC<ChooseSettingsModalProps> = ({
  open,
  applySettings,
}) => {
  const [temporaryDifficulty, setTemporaryDifficulty] = useState(
    'intermediate'
  );
  const [temporaryShowMistakes, setTemporaryShowMistakes] = useState(true);

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
          <h3>Choose Settings</h3>

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
            <br />
            <FormControlLabel
              control={
                <Switch
                  size="medium"
                  checked={temporaryShowMistakes}
                  onChange={handleShowMistakesChange}
                />
              }
              label="Show Mistakes"
            />
            <br />
          </FormControl>
          <div>
            <Button
              variant="contained"
              onClick={() =>
                applySettings(temporaryDifficulty, temporaryShowMistakes)
              }
            >
              Start Game!
            </Button>
          </div>
        </>
      }
    />
  );
};
