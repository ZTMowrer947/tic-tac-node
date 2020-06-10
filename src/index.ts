// Imports
import readline from 'readline-sync';
import { PlayerMark } from './models/Board';
import Game, { PlayerType } from './models/Game';

// Option choices
const startingFirstChoices: PlayerType[] = ['Human', 'AI'];
const playingAsChoices: PlayerMark[] = ['X', 'O'];

// Welcome message
console.log(
    `Welcome to Tic-Tac-Node version ${process.env.npm_package_version}.`
);

// Decide who goes first
const startingFirstIndex = readline.keyInSelect(
    startingFirstChoices,
    'Who shall go first?',
    {
        cancel: 'Exit',
    }
);

// If the user chose to exit,
if (startingFirstIndex === -1) {
    // Exit with 0 code
    process.exit(0);
}

// Otherwise, continue on
console.log('\n\n');

// Determine whether human shall play as X or O
const playingAsIndex = readline.keyInSelect(
    playingAsChoices,
    'Who shall you play as?',
    {
        cancel: 'Exit',
    }
);

// If the user chose to exit,
if (startingFirstIndex === -1) {
    // Exit with 0 code
    process.exit(0);
}

// Otherwise, initialize game
const game = new Game({
    humanPlayingAs: playingAsChoices[playingAsIndex],
    startingFirst: startingFirstChoices[startingFirstIndex],
});

while (game.status !== 'Done') {
    console.clear();
    console.log(game.toString());
    console.log('\n\n');

    game.takeTurn();
}

console.clear();
console.log(game.toString());
console.log('\n\n');

switch (game.winningPlayer) {
    case 'Human':
        console.log('You win!');
        break;

    case 'AI':
        console.log('Sorry, you lost.');
        break;

    default:
        console.log("It's a draw!");
        break;
}
