type SudokuBoard = Array<SudokuRow>;
type SudokuRow = Array<SudokuItemType>;
type SudokuItemType = { value: number; permanent: boolean };

type Coordinates = [number, number];
type ChangeItem = (coordinates: Coordinates, newValue: number) => void;
