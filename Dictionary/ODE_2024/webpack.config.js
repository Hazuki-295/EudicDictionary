const path = require('path');

module.exports = {
    entry: './src/exportHtmlDiff.js',
    output: {
        filename: 'htmlDiff.bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    mode: 'development',
};
