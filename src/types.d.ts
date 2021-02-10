type SudokuBoard = Array<SudokuRow>;
type SudokuRow = Array<SudokuItemType>;
type SudokuItemType = { value: number; permanent: boolean };

type Mistakes = Array<MistakesRow>;
type MistakesRow = Array<boolean>;
type TemporaryMistakes = Array<Coordinates>;

type CheckGroup = Array<CheckItem>;
type CheckItem = { value: number; coordinates: Coordinates };

type Coordinates = [number, number];
type ChangeItem = (coordinates: Coordinates, newValue: number) => void;

type Puzzles = { [k: string]: Array<string> };
