// Imports
import findAnyEdgeMove from '../any-edge';
import { Grid } from '../../../models/Board';

// Test Suite
describe('AI helper for any edge move', () => {
    it('should select a edge move from those that are playable', () => {
        // Define grid to test
        const grid: Grid = [
            ['X', ' ', ' '],
            [' ', 'O', 'X'],
            [' ', ' ', ' '],
        ];

        // Define acceptable coordinates
        const acceptableCoordinates = [
            { x: 1, y: 0 },
            { x: 0, y: 1 },
            { x: 1, y: 2 },
        ];

        // Select actual coordinate
        const selected = findAnyEdgeMove(grid);

        // Expect selected coordinate to be acceptable
        expect(acceptableCoordinates).toContainEqual(selected);
    });

    it('should return null if no edge move is playable', () => {
        // Define grid to test
        const grid: Grid = [
            ['O', 'X', 'X'],
            ['X', 'X', 'O'],
            ['O', 'O', 'X'],
        ];

        // Check if any edge is playable
        const result = findAnyEdgeMove(grid);

        // Expect no edge to be playable
        expect(result).toBeNull();
    });
});
