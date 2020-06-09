import { PlayerMark } from '../models/Board';

// Helper functions
function getOpponent(player: PlayerMark): PlayerMark {
    // If player is X, return O, otherwise return X
    return player === 'X' ? 'O' : 'X';
}

// Exports
export { getOpponent };
