// Imports
import findCenterMove from '../center';
import Coordinate from '../../../models/Coordinate';
import { Grid } from '../../../models/Board';

describe('AI helper for center moves', () => {
    it('should return center coordinates if playable', () => {
        // Define grid to test
        const grid: Grid = [
            [' ', ' ', ' '],
            [' ', ' ', ' '],
            [' ', ' ', ' '],
        ];

        // Define expected coordinates
        const expected: Coordinate = {
            x: 1,
            y: 1,
        };

        // Calculate actual coordinates
        const actual = findCenterMove(grid);

        // Expect coordinates to match
        expect(actual).toStrictEqual(expected);
    });

    it('should return null if center is not playable', () => {
        // Define grid to test
        const grid: Grid = [
            ['O', ' ', ' '],
            [' ', 'X', ' '],
            [' ', ' ', ' '],
        ];

        // Check if center is playable
        const result = findCenterMove(grid);

        // Expect center to not be playable
        expect(result).toBeNull();
    });
});
