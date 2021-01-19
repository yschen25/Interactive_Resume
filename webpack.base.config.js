const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        index: ['./src/main.js']
    },
    output: {
        filename: 'dist/js/bundle.[hash].js',
        path: path.resolve('./'),
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    plugins: [
        // Insert a bundle file into new html file automatically when run webpack -p
        new HtmlWebpackPlugin({
            template: './src/main.html',
            filename: 'index.html',
            minify: {
                collapseWhitespace: true,
            },
            hash: true,
            stats: {
                children: false
            }
        })],
    module: {
        rules: [
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                        options: {
                            attrs: false
                        }
                    }
                ]
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-react', '@babel/preset-env']
                    }
                }
            },
            {
                /* The postcss-loader should be placed after css-loader and style-loader,
                   but before other preprocessor loaders like e.g sass|less|stylus-loader */
                test: /\.(css|scss|sass)$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'postcss-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(gif|jpg|png|svg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: './dist/images/',
                            name: 'i.[hash].[ext]'
                        }
                    }
                ]
            }
        ]
    }
};
