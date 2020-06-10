// Imports
import { Grid } from '../../../models/Board';
import findForkBlockingMove from '../fork-block';

describe('AI helpers for moves blocking forks', () => {
    it('should avoid an XOX pattern fork', () => {
        // Define grid
        const grid: Grid = [
            ['X', ' ', ' '],
            [' ', 'O', ' '],
            [' ', ' ', 'X'],
        ];

        // Define acceptable coordinates
        const acceptableCoordinates = [
            { x: 1, y: 0 },
            { x: 0, y: 1 },
            { x: 1, y: 2 },
            { x: 2, y: 1 },
        ];

        // Select actual coordinate
        const selected = findForkBlockingMove('O', grid);

        // Expect selected coordinate to be acceptable
        expect(acceptableCoordinates).toContainEqual(selected);
    });

    it('should return null if no fork is present to block', () => {
        // Define grid to test
        const grid: Grid = [
            ['O', ' ', 'X'],
            ['X', 'X', 'O'],
            ['O', 'O', 'X'],
        ];

        // Check if any fork is blockable
        const result = findForkBlockingMove('O', grid);

        // Expect no fork to be blockable
        expect(result).toBeNull();
    });
});
