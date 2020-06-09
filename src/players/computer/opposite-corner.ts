// Imports
import Coordinate from '../../models/Coordinate';
import { Grid, PlayerMark } from '../../models/Board';
import { getOpponent } from '../../helpers/player';

// Constants
const corners: Coordinate[] = [
    { x: 0, y: 0 },
    { x: 2, y: 0 },
    { x: 0, y: 2 },
    { x: 2, y: 2 },
];

// Functions
function findOppositeCornerMove(
    player: PlayerMark,
    grid: Grid
): Coordinate | null {
    // Get opponent player
    const opponent = getOpponent(player);

    // Search for opponent in corners, while also ensuring that opposing corner is playable
    const opponentCorner = corners.find(({ x, y }) => {
        return (
            grid[y][x] === opponent &&
            grid[Math.abs(y - 2)][Math.abs(x - 2)] === ' '
        );
    });

    // If corner was found,
    if (opponentCorner) {
        // Return opposing corner
        return {
            x: Math.abs(opponentCorner.x - 2),
            y: Math.abs(opponentCorner.y - 2),
        };
    }

    // Otherwise, return null
    return null;
}

// Exports
export default findOppositeCornerMove;
