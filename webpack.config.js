const path = require('path');

module.exports = {
    entry: './src/background/background.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
};
