// Imports
import { Grid, PlayerMark } from '../../models/Board';
import Coordinate from '../../models/Coordinate';
import Player from '../../models/Player';
import findWinningMove from './win';
import findBlockingMove from './block';
import findCenterMove from './center';
import findOppositeCornerMove from './opposite-corner';
import findAnyCornerMove from './any-corner';
import findAnyEdgeMove from './any-edge';

// Class
class Computer implements Player {
    private readonly _mark: PlayerMark;

    public constructor(mark: PlayerMark) {
        this._mark = mark;
    }

    public get mark(): PlayerMark {
        return this._mark;
    }

    public selectMove(grid: Grid): Coordinate {
        // Work through all move finders until a move to play is found
        const move =
            findWinningMove(this._mark, grid) ??
            findBlockingMove(this._mark, grid) ??
            findCenterMove(grid) ??
            findOppositeCornerMove(this._mark, grid) ??
            findAnyCornerMove(grid) ??
            findAnyEdgeMove(grid);

        // If a move was found,
        if (move) {
            // Return move
            return move;
        }

        // Otherwise, throw error
        throw new Error('Could not find a valid move to play.');
    }
}

// Export
export default Computer;
