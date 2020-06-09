// Imports
import { Grid, GridRow, MutableGrid, Player } from '../../models/Board';
import Coordinate from '../../models/Coordinate';

// Functions
const getWinLine = (player: Player): GridRow => [player, player, ' '];

function linesMatch(
    expected: Readonly<GridRow>,
    actual: Readonly<GridRow>
): boolean {
    // Sort rows
    const sortedExpected: GridRow = [...expected].sort() as GridRow;
    const sortedActual: GridRow = [...actual].sort() as GridRow;

    // Ensure every space in each row matches
    return [0, 1, 2].every((idx) => sortedExpected[idx] === sortedActual[idx]);
}

function findWinningRow(winLine: GridRow, grid: Grid): Coordinate | null {
    // Attempt to find row index that matches line to win
    const y = grid.findIndex((row) => linesMatch(winLine, row));

    // If a winning row was found,
    if (y !== -1) {
        // Get the x coordinate of the empty space in the row
        const x = grid[y].findIndex((space) => space === ' ');

        // Return the coordinate pair to play at
        return { x, y };
    }

    // Otherwise, return null
    return null;
}

function findWinningCol(winLine: GridRow, grid: Grid): Coordinate | null {
    // Define grid to mutate
    const cols: MutableGrid = [
        [' ', ' ', ' '],
        [' ', ' ', ' '],
        [' ', ' ', ' '],
    ];

    // Rotate grid
    grid.forEach((row, y) => {
        row.forEach((space, x) => {
            cols[x][y] = space;
        });
    });

    // Attempt to find winning row in rotated grid
    const coordinates = findWinningRow(winLine, cols);

    // If coordinates were found,
    if (coordinates) {
        // Flip them
        return {
            x: coordinates.y,
            y: coordinates.x,
        };
    }

    // Otherwise, return null
    return null;
}

function findWinningMove(player: Player, grid: Grid): Coordinate | null {
    // Calculate winning line for player
    const winLine = getWinLine(player);

    // Check rows and columns (later diagonals) for a winning move
    return findWinningRow(winLine, grid) ?? findWinningCol(winLine, grid);
}

// Exports
export default findWinningMove;
