const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const config = require('./webpack.base.config.js'); // Merge base webpack config

module.exports = merge(config, {
    optimization: {
        minimize: true,
        minimizer: [
            new UglifyJSPlugin({
                uglifyOptions: {
                    warnings: false,
                    compress: {
                        drop_console: true
                    },
                    output: {
                        comments: false, // Clear comments
                    }
                }
            })
        ]
    },
    plugins: [
        // Clear last time bundle file
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: [`${__dirname}/dist`],
            verbose: true,
        })
    ],
    performance: {
        hints: false
    },
    mode: 'production'
});