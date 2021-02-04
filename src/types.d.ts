type SudokuBoard = Array<SudokuRow>;
type SudokuRow = Array<SudokuItemType>;
type SudokuItemType = number | null;

type Coordinates = [number, number];
type ChangeItem = (coordinates: Coordinates, newValue: number) => void;
