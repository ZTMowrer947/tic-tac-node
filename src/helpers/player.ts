import { Player } from '../models/Board';

// Helper functions
function getOpponent(player: Player): Player {
    // If player is X, return O, otherwise return X
    return player === 'X' ? 'O' : 'X';
}

// Exports
export { getOpponent };
