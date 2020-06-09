// Imports
import findWinningMove from '../win';
import { Grid } from '../../../models/Board';
import Coordinate from '../../../models/Coordinate';

// Test Suite
describe('AI helper for winning moves', () => {
    let rowGrids: Grid[];
    let rowExpectedMoves: Coordinate[];

    beforeAll(() => {
        // Define board grids to test for rows, columns, and diagonals
        rowGrids = [
            [
                [' ', 'X', 'X'],
                ['O', 'O', 'X'],
                ['X', 'O', 'O'],
            ],
            [
                ['X', ' ', 'X'],
                ['O', 'O', 'X'],
                ['X', 'O', 'O'],
            ],
            [
                ['X', 'X', ' '],
                ['O', 'O', 'X'],
                ['X', 'O', 'O'],
            ],
            [
                ['O', 'O', 'X'],
                [' ', 'X', 'X'],
                ['O', 'X', 'O'],
            ],
            [
                ['O', 'O', 'X'],
                ['X', ' ', 'X'],
                ['O', 'X', 'O'],
            ],
            [
                ['O', 'O', 'X'],
                ['X', 'X', ' '],
                ['O', 'X', 'O'],
            ],
            [
                ['O', 'X', 'O'],
                ['X', 'O', 'O'],
                [' ', 'X', 'X'],
            ],
            [
                ['O', 'X', 'O'],
                ['X', 'O', 'O'],
                ['X', ' ', 'X'],
            ],
            [
                ['O', 'X', 'O'],
                ['X', 'O', 'O'],
                ['X', 'X', ' '],
            ],
        ];

        // Define expected moves for each of the above
        rowExpectedMoves = [
            { x: 0, y: 0 },
            { x: 1, y: 0 },
            { x: 2, y: 0 },
            { x: 0, y: 1 },
            { x: 1, y: 1 },
            { x: 2, y: 1 },
            { x: 0, y: 2 },
            { x: 1, y: 2 },
            { x: 2, y: 2 },
        ];
    });

    it('should determine winning move for rows', () => {
        // Iterate through row win grids
        rowGrids.forEach((grid, index) => {
            // Get expected move
            const expected = rowExpectedMoves[index];

            // Calculate actual move
            const actual = findWinningMove('X', grid);

            // Expect moves to match
            expect(actual).toStrictEqual(expected);
        });
    });

    it('should return null if winning move cannot be found', () => {
        // Setup grid that has no winning move
        const grid: Grid = [
            ['O', ' ', 'X'],
            ['X', 'X', 'O'],
            ['O', 'O', 'X'],
        ];

        // Attempt to calculate winning move
        const result = findWinningMove('X', grid);

        // Expect calculation to have found no winning move
        expect(result).toBeNull();
    });
});
