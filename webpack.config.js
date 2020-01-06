const path = require('path');

module.exports = {
    mode: process.env.NODE_ENV,
    entry: {
        bundle: './src',
    },
    output: {
        path: path.resolve('docs'),
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-react'],
                        plugins: ['@babel/plugin-proposal-class-properties'],
                    },
                },
            },
            {
                test: /\.s?css$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
        ],
    },
    resolve: {
        extensions: ['.wasm', '.mjs', '.jsx', '.js', '.json'],
    },
    devtool: 'source-map',
    devServer: {
        contentBase: path.resolve('docs'),
        historyApiFallback: true,
        stats: 'errors-only',
    },
};
