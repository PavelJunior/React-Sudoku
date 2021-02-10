import React, { ChangeEvent, useState } from 'react';
import { Modal } from '../Modal';
import {
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
} from '@material-ui/core';

interface SuccessModalProps {
  open: Boolean;
  setDifficulty: Function;
}

export const ChooseDifficultyModal: React.FC<SuccessModalProps> = ({
  open,
  setDifficulty,
}) => {
  const [temporaryDifficulty, setTemporaryDifficulty] = useState(
    'intermediate'
  );

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    open = false;
    setTemporaryDifficulty(e.target.value);
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
              onChange={handleChange}
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

          <div>
            <button onClick={() => setDifficulty(temporaryDifficulty)}>
              Start Game!
            </button>
          </div>
        </>
      }
    />
  );
};
