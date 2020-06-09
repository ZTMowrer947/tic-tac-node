// Imports
import Coordinate from './Coordinate';

// Helper types
/**
 * Represents an X or O on a tic-tac-toe board.
 */
type Player = 'X' | 'O';

/**
 * Represents a space on a tic-tac-toe board.
 */
type GridSpace = Player | ' ';

/**
 * Represents a row of three spaces on a tic-tac-toe board.
 */
type GridRow = [GridSpace, GridSpace, GridSpace];

/**
 * Represents the 9x9 grid of a tic-tac-toe board.
 */
type MutableGrid = Readonly<[GridRow, GridRow, GridRow]>;

/**
 * Represents a read-only snapshot of a tic-tac-toe grid.
 */
type Grid = Readonly<[Readonly<GridRow>, Readonly<GridRow>, Readonly<GridRow>]>;

// Class
/**
 * Represents a tic-tac-toe board.
 */
class Board {
    /**
     * A mutable copy of the tic-tac-toe grid.
     */
    private readonly _grid: MutableGrid;

    /**
     * @param grid A 9x9 grid to initialize the tic-tac-toe board with. Defaults to an empty board.
     */
    public constructor(
        grid: MutableGrid = [
            [' ', ' ', ' '],
            [' ', ' ', ' '],
            [' ', ' ', ' '],
        ]
    ) {
        this._grid = grid;
    }

    /**
     * Retrieves a read-only snapshot of the current state of the board.
     */
    public get grid(): Grid {
        return this._grid;
    }

    public makeMove(player: Player, { x, y }: Coordinate): void {
        // If the coordinates are invalid,
        if (!this._grid[y]?.[x]) {
            // Throw an error
            throw new Error(`Invalid coordinates: (${x}, ${y})`);
        }

        // Otherwise, store player mark at given coordinates
        this._grid[y][x] = player;
    }

    /**
     * Returns the stringified game board.
     */
    public toString(): string {
        return this._grid.map((row) => row.join('|')).join('\n-----\n');
    }
}

// Exports
export default Board;
export { Player, GridSpace, Grid, MutableGrid };
