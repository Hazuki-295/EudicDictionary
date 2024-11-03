const path = require('path');

module.exports = {
    entry: {
        notes: './src/notes.js',
        clickToCopy: './src/clickToCopy.js',
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/inline',
            },
            {
                test: /\.(woff2)$/i,
                type: 'asset/inline',
            },
        ],
    },
};