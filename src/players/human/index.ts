// Imports
import readline from 'readline-sync';
import { Grid, PlayerMark } from '../../models/Board';
import Coordinate from '../../models/Coordinate';
import Player from '../../models/Player';

// Class
class Human implements Player {
  private readonly _mark: PlayerMark;

  public constructor(mark: PlayerMark) {
    this._mark = mark;
  }

  public get mark(): PlayerMark {
    return this._mark;
  }

  selectMove(grid: Grid): Coordinate {
    while (true) {
      // Ask user for x and y coordinates
      const x = readline.questionInt('Enter x coordinate (0, 1, 2): ', {
        defaultInput: '-1',
      });

      const y = readline.questionInt('Enter y coordinate (0, 1, 2): ', {
        defaultInput: '-1',
      });

      // Check if space on that grid is empty
      const isSpaceUsuable = grid[y]?.[x] === ' ';

      // If space is usable,
      if (isSpaceUsuable) {
        // Return the selected coordinates
        return { x, y };
      } else if (![0, 1, 2].includes(x) || ![0, 1, 2].includes(y)) {
        // If coordinates are invalid, print out appropriate message
        console.log('Invalid x and/or y coordinate.');
      } else {
        // Otherwise, print out message to user
        console.log('Those coordinates have already been occupied.');
      }
    }
  }
}

// Export
export default Human;
