// Imports
import { Grid } from '../../models/Board';
import Coordinate from '../../models/Coordinate';

// Constants
const corners: Coordinate[] = [
    { x: 0, y: 0 },
    { x: 2, y: 0 },
    { x: 0, y: 2 },
    { x: 2, y: 2 },
];

// Functions
function findAnyCornerMove(grid: Grid): Coordinate | null {
    // Filter out corners that are in used
    const availableCorners = corners.filter(({ x, y }) => grid[y][x] === ' ');

    // If at least one corner is available,
    if (availableCorners.length > 0) {
        // Select a random corner index
        const index = Math.floor(Math.random() * availableCorners.length);

        // Return that corner's coordinates
        return availableCorners[index];
    }

    // Otherwise, return null
    return null;
}

// Exports
export default findAnyCornerMove;
