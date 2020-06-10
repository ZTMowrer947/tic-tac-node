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

// Otherwise, setup options
const gameOptions = {
    humanPlayingAs: playingAsChoices[playingAsIndex],
    startingFirst: startingFirstChoices[startingFirstIndex],
};

// Start game loop
while (true) {
    // Initialize game
    const game = new Game(gameOptions);

    // While the game is ongoing,
    while (game.status !== 'Done') {
        // Print out the game board
        console.clear();
        console.log(game.toString());
        console.log('\n\n');

        // Take a game turn
        game.takeTurn();
    }

    // Print out final board when game is done
    console.clear();
    console.log(game.toString());
    console.log('\n\n');

    // Consider who won the game
    switch (game.winningPlayer) {
        // Human player
        case 'Human':
            // Set human to be the one to start first next time
            gameOptions.startingFirst = 'Human';

            // Display congratulatory message
            console.log('You win!');
            break;

        // Computer player
        case 'AI':
            // Set computer to be the one to start first next time
            gameOptions.startingFirst = 'AI';

            // Display loss message
            console.log('Sorry, you lost.');
            break;

        // Drawn game
        default:
            // Alternate who shall go first next time
            gameOptions.startingFirst =
                gameOptions.startingFirst === 'Human' ? 'AI' : 'Human';

            // Display draw message
            console.log("It's a draw!");
            break;
    }

    // Ask player if they like to play again
    const playAgain = readline.keyInYNStrict('Would you like to play again?');

    // If they chose not to play again
    if (!playAgain) {
        // Thank user for playing
        console.log('Thanks for playing!');

        // Exit loop
        break;
    }
}
