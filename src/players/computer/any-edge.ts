// Imports
import { Grid } from '../../models/Board';
import Coordinate from '../../models/Coordinate';

// Constants
const edges: Coordinate[] = [
    { x: 1, y: 0 },
    { x: 0, y: 1 },
    { x: 2, y: 1 },
    { x: 1, y: 2 },
];

// Functions
function findAnyEdgeMove(grid: Grid): Coordinate | null {
    // Filter out edges that are in used
    const availableEdges = edges.filter(({ x, y }) => grid[y][x] === ' ');

    // If at least one edge is available,
    if (availableEdges.length > 0) {
        // Select a random edge index
        const index = Math.floor(Math.random() * availableEdges.length);

        // Return that edge's coordinates
        return availableEdges[index];
    }

    // Otherwise, return null
    return null;
}

// Exports
export default findAnyEdgeMove;
