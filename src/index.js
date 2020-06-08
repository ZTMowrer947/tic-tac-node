// This script merely serves to run the program in development mode, and should not be used in production.

// Register babel to process TypeScript
/* eslint-disable @typescript-eslint/no-var-requires */
require('@babel/register')({
    extensions: ['.ts'],
});

// Load program
require('./index.ts');
