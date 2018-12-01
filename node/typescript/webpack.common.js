const path = require('path');

module.exports = {
    entry: [
        './src/index.ts'
    ],
    module: {
        rules: [
            {
                test: /\.tex?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ],
    },
    output: {
        path: path.resolve('dist/'),
        filename: 'main.js',
    },
};