// Imports
import { describe, expect, it } from 'vitest';

import findAnyCornerMove from '../any-corner';
import { Grid } from '../../../models/Board';

// Test Suite
describe('AI helper for any corner move', () => {
  it('should select corner move from those that are playable', () => {
    // Define grid to test
    const grid: Grid = [
      ['X', ' ', ' '],
      [' ', 'O', 'X'],
      [' ', ' ', ' '],
    ];

    // Define acceptable coordinates
    const acceptableCoordinates = [
      { x: 2, y: 0 },
      { x: 0, y: 2 },
      { x: 2, y: 2 },
    ];

    // Select actual coordinate
    const selected = findAnyCornerMove(grid);

    // Expect selected coordinate to be acceptable
    expect(acceptableCoordinates).toContainEqual(selected);
  });

  it('should return null if no corner move is playable', () => {
    // Define grid to test
    const grid: Grid = [
      ['O', ' ', 'X'],
      ['X', 'X', 'O'],
      ['O', 'O', 'X'],
    ];

    // Check if any corner is playable
    const result = findAnyCornerMove(grid);

    // Expect no corner to be playable
    expect(result).toBeNull();
  });
});
