// Imports
import findOppositeCornerMove from '../opposite-corner';
import { Grid } from '../../../models/Board';

// Test Suite
describe('AI helper for opposite corner moves', () => {
    it('should determine opposing corner move', () => {
        // Define grid to test
        const grid: Grid = [
            ['X', ' ', ' '],
            [' ', 'O', 'X'],
            [' ', ' ', ' '],
        ];

        // Define expected coordinates
        const expected = {
            x: 2,
            y: 2,
        };

        // Calculate actual coordinates
        const actual = findOppositeCornerMove('O', grid);

        // Expect coordinates to match
        expect(actual).toStrictEqual(expected);
    });

    it('should return null if an opponent corner move is found but its opposing corner is not playable', () => {
        // Define grid to test
        const grid: Grid = [
            ['X', ' ', ' '],
            [' ', 'O', 'O'],
            [' ', ' ', 'X'],
        ];

        // Check if opposing corner is playable
        const result = findOppositeCornerMove('X', grid);

        // Expect opposing corner to not be playable
        expect(result).toBeNull();
    });

    it('should return null if no opponent corner move is playable', () => {
        // Define grid to test
        const grid: Grid = [
            ['O', ' ', 'X'],
            ['X', 'X', 'O'],
            ['O', 'O', 'X'],
        ];

        // Check if opposing corner is playable
        const result = findOppositeCornerMove('X', grid);

        // Expect no opposing corner to be playable
        expect(result).toBeNull();
    });
});
