// Imports
import { Grid, GridRow, MutableGrid, PlayerMark } from '../../models/Board';
import Coordinate from '../../models/Coordinate';

// Functions
/**
 * Calculates the winning line for the given player.
 * @param player The player to calculate the winning line for.
 */
const getWinLine = (player: PlayerMark): GridRow => [player, player, ' '];

/**
 * Determines whether the two given grid lines are equal.
 * @param expected The expected line.
 * @param actual The actual line.
 */
function linesMatch(
  expected: Readonly<GridRow>,
  actual: Readonly<GridRow>,
): boolean {
  // Sort rows
  const sortedExpected: GridRow = [...expected].sort() as GridRow;
  const sortedActual: GridRow = [...actual].sort() as GridRow;

  // Ensure every space in each row matches
  return [0, 1, 2].every((idx) => sortedExpected[idx] === sortedActual[idx]);
}

/**
 * Attempts to find what move the computer can play to win with a horizontal 3-in-a-row.
 * @param winLine The winning line to check against.
 * @param grid The grid to operate on.
 */
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

/**
 * Attempts to find what move the computer can play to win with a vertical 3-in-a-row.
 * @param winLine The winning line to check against.
 * @param grid The grid to operate on.
 */
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

/**
 * Attempts to find what move the computer can play to win with a diagonal 3-in-a-row.
 * @param winLine The winning line to check against.
 * @param grid The grid to operate on.
 */
function findWinningDiagonal(winLine: GridRow, grid: Grid): Coordinate | null {
  // Define diagonals
  const diagonals: GridRow[] = [
    [grid[0][0], grid[1][1], grid[2][2]],
    [grid[2][0], grid[1][1], grid[0][2]],
  ];

  // Attempt to find index of winning diagonal
  const index = diagonals.findIndex((diagonal) =>
    linesMatch(winLine, diagonal),
  );

  // If a winning diagonal was found,
  if (index !== -1) {
    // Determine whether y coordinate should be inverted
    const invertY = index === 1;

    // Get the x coordinate of the empty space in the diagonal
    const x = diagonals[index].findIndex((space) => space === ' ');

    // Invert the y coordinate if needed
    const y = invertY ? Math.abs(x - 2) : x;

    // Return the coordinate pair to play at
    return { x, y };
  }

  // Otherwise, return null
  return null;
}

/**
 * Attempts to find what move the computer can play to win with a 3-in-a-row.
 * @param player The player to win.
 * @param grid The grid to operate on.
 */
function findWinningMove(player: PlayerMark, grid: Grid): Coordinate | null {
  // Calculate winning line for player
  const winLine = getWinLine(player);

  // Check rows, columns, and diagonals for a winning move
  return (
    findWinningRow(winLine, grid) ??
    findWinningCol(winLine, grid) ??
    findWinningDiagonal(winLine, grid)
  );
}

// Exports
export default findWinningMove;
