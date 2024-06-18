// Import
import { PlayerMark, Grid } from './Board';
import Coordinate from './Coordinate';

// Interface
interface Player {
  mark: PlayerMark;

  selectMove(grid: Grid): Coordinate;
}

// Export
export default Player;
