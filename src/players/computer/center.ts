// Imports
import { Grid } from '../../models/Board';
import Coordinate from '../../models/Coordinate';

// Functions
function findCenterMove(grid: Grid): Coordinate | null {
  // Play center if it is not already taken
  return grid[1][1] === ' ' ? { x: 1, y: 1 } : null;
}

// Exports
export default findCenterMove;
