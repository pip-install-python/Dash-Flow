const path = require('path');
const webpack = require('webpack');
const WebpackDashDynamicImport = require('@plotly/webpack-dash-dynamic-import');
const packagejson = require('./package.json');

const dashLibraryName = packagejson.name.replace(/-/g, '_');

module.exports = (env, argv) => {
    let mode = argv.mode || 'production';
    const entry = './src/lib/index.js';

    return {
        mode,
        entry,
        output: {
            path: path.resolve(__dirname, dashLibraryName),
            filename: `${dashLibraryName}.${mode === 'development' ? 'dev' : 'min'}.js`,
            library: dashLibraryName,
            libraryTarget: 'window',
        },
        externals: {
            react: 'React',
            'react-dom': 'ReactDOM',
            'prop-types': 'PropTypes',
        },
        module: {
            rules: [
                {
                    test: /\.jsx?$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env', '@babel/preset-react'],
                        },
                    },
                },
                {
                    test: /\.css$/,
                    use: ['style-loader', 'css-loader'],
                },
            ],
        },
        resolve: {
            extensions: ['.js', '.jsx'],
            alias: {
                '@hooks': path.resolve(__dirname, 'src/lib/hooks')
            }
        },
        plugins: [
            new WebpackDashDynamicImport(),
            new webpack.SourceMapDevToolPlugin({
                filename: '[file].map',
            })
        ]
    };
};
