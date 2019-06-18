// This file isn't transpilled, do must use CommonJs and ES5

// Register Babel to transpile before running tests
require('babel-register')();

// Disable webpack features that Mocha doesn't understand
require.extensions['.css'] = function () {};