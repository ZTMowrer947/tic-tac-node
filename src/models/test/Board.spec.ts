import { beforeEach, describe, expect, it } from 'vitest';

import Board, { MutableGrid, PlayerMark } from '../Board';
import Coordinate from '../Coordinate';

// Test Suite
describe('Board class', () => {
  describe('constructor', () => {
    it('should initialize an empty grid if none is provided as an argument', () => {
      // Define expected grid
      const expectedGrid: MutableGrid = [
        [' ', ' ', ' '],
        [' ', ' ', ' '],
        [' ', ' ', ' '],
      ];

      // Initialize board
      const board = new Board();

      // Serialize grids for comparison
      const expected = expectedGrid.map((row) => row.join()).join();
      const actual = board.grid.map((row) => row.join()).join();

      // Expect grids to match
      expect(actual).toStrictEqual(expected);
    });

    it('should initialize the grid to the one passed in', () => {
      // Define grid
      const grid: MutableGrid = [
        ['X', 'X', 'O'],
        ['O', 'X', 'X'],
        ['X', 'O', 'O'],
      ];

      // Initialize board
      const board = new Board(grid);

      // Serialize grids for comparison
      const expected = grid.map((row) => row.join()).join();
      const actual = board.grid.map((row) => row.join()).join();

      // Expect grids to match
      expect(actual).toStrictEqual(expected);
    });
  });

  describe('makeMove method', () => {
    let board: Board;
    const player: PlayerMark = 'X';

    beforeEach(() => {
      board = new Board();
    });

    it('should throw an error if invalid coordinates are provided', () => {
      // Define coordinates
      const coordinate: Coordinate = {
        x: 5,
        y: 5,
      };

      // Expect makeMove to throw error
      expect(() => board.makeMove(player, coordinate)).toThrow();
    });

    it('should make a mark at the given coordinates if they are valid', () => {
      // Define coordinates
      const coordinate: Coordinate = {
        x: 1,
        y: 1,
      };

      // Invoke method
      board.makeMove(player, coordinate);

      // Get space on grid to check
      const actualSpace = board.grid[coordinate.y][coordinate.x];

      // Expect player mark to have been made on selected space
      expect(actualSpace).toStrictEqual(player);
    });
  });
});
