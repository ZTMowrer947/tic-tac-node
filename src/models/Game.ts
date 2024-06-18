// Imports
import Board, { MutableGrid, PlayerMark, GridRow } from './Board';
import Player from './Player';
import Human from '../players/human/index';
import { getOpponent } from '../helpers/player';
import Computer from '../players/computer/index';

// Helper types
type PlayerType = 'Human' | 'AI';
type GameStatus = 'Ongoing' | 'Done';

interface GameOptions {
  humanPlayingAs: PlayerMark;
  startingFirst: PlayerType;
}

// Class
class Game {
  private readonly _board: Board;
  private readonly _options: GameOptions;
  private readonly _humanPlayer: Human;
  private readonly _computerPlayer: Computer;
  private _currentTurn: PlayerType;

  public constructor(options: GameOptions) {
    this._options = options;
    this._board = new Board();

    const computerPlayingAs = getOpponent(this._options.humanPlayingAs);

    this._humanPlayer = new Human(this._options.humanPlayingAs);
    this._computerPlayer = new Computer(computerPlayingAs);
    this._currentTurn = this._options.startingFirst;
  }

  private get _currentPlayer(): Player {
    return this._currentTurn === 'AI'
      ? this._computerPlayer
      : this._humanPlayer;
  }

  public get status(): GameStatus {
    const isDone =
      !!this.winningPlayer ||
      this._board.grid.every((row) => row.every((space) => space !== ' '));

    return isDone ? 'Done' : 'Ongoing';
  }

  public get winningPlayer(): PlayerType | false {
    const rotatedGrid: MutableGrid = [
      [' ', ' ', ' '],
      [' ', ' ', ' '],
      [' ', ' ', ' '],
    ];

    this._board.grid.forEach((row, y) => {
      row.forEach((space, x) => {
        rotatedGrid[x][y] = space;
      });
    });

    const allRows = [
      ...this._board.grid,
      ...rotatedGrid,
      [this._board.grid[0][0], this._board.grid[1][1], this._board.grid[2][2]],
      [this._board.grid[2][0], this._board.grid[1][1], this._board.grid[0][2]],
    ];

    const winner = (['X', 'O'] as PlayerMark[]).find((mark) => {
      const winRow: GridRow = [mark, mark, mark];

      return allRows.some((row) => {
        return winRow.join('') === row.join('');
      });
    });

    if (winner) {
      return this._humanPlayer.mark === winner ? 'Human' : 'AI';
    }

    return false;
  }

  public takeTurn(): void {
    // Get the move that the current player shall play
    const move = this._currentPlayer.selectMove(this._board.grid);

    // Make the move on the game board
    this._board.makeMove(this._currentPlayer.mark, move);

    // Alternate whose turn it is
    this._currentTurn = this._currentTurn === 'Human' ? 'AI' : 'Human';
  }

  public toString(): string {
    return this._board.toString();
  }
}

// Exports
export default Game;
export { PlayerType };
