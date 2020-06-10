// Imports
import findAnyEdgeMove from './any-edge';
import { Grid, PlayerMark, GridRow } from '../../models/Board';
import Coordinate from '../../models/Coordinate';
import { getOpponent } from '../../helpers/player';

// Function
function findForkBlockingMove(mark: PlayerMark, grid: Grid): Coordinate | null {
    // Get opponent mark
    const opponent = getOpponent(mark);

    // Get diagonals
    const diagonals = [
        [grid[0][0], grid[1][1], grid[2][2]],
        [grid[2][0], grid[1][1], grid[0][2]],
    ];

    // Define pattern we are looking for
    const pattern: GridRow = [opponent, mark, opponent];

    // If this pattern is found,
    if (diagonals.some((diagonal) => diagonal.join() === pattern.join())) {
        // Play on any available edge
        return findAnyEdgeMove(grid);
    }

    // Otherwise, return null
    return null;
}

// Exports
export default findForkBlockingMove;
