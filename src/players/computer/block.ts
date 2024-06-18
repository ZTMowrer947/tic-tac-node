// Imports
import findWinningMove from './win';
import { getOpponent } from '../../helpers/player';
import { Grid, PlayerMark } from '../../models/Board';
import Coordinate from '../../models/Coordinate';

// Functions
/**
 * Attempts to find which move the computer can play to block the human player from winning.
 * @param player The player to perform the block.
 * @param grid The grid to operate on.
 */
function findBlockingMove(player: PlayerMark, grid: Grid): Coordinate | null {
  // Get opponent player
  const opponent = getOpponent(player);

  // Find which move the opponent could play to win, and play that move to block it
  return findWinningMove(opponent, grid);
}

// Export
export default findBlockingMove;
