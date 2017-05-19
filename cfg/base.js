'use strict';
let path = require('path');
let defaultSettings = require('./defaults');

// Additional npm or bower modules to include in builds
// Add all foreign plugins you may need into this array
// @example:
// let npmBase = path.join(__dirname, '../node_modules');
// let additionalPaths = [ path.join(npmBase, 'react-bootstrap') ];
function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
    devtool: 'eval',
    output: {
      path: defaultSettings.build.assetsRoot,
      filename: '[name].js',
      publicPath: process.env.NODE_ENV === 'production'
        ? defaultSettings.build.assetsPublicPath
        : defaultSettings.dev.assetsPublicPath
    },
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            use: [{
                loader: 'eslint-loader',
                options: {
                    formatter: require('eslint-friendly-formatter')
                }
            }],
            enforce: 'pre',
            include: resolve('src'),
        }, {
            test: /\.css$/,
            use: [{
                loader: 'style-loader'
            }, {
                loader: 'css-loader'
            }]
        }, {
            test: /\.sass/,
            loader: 'style-loader!css-loader!sass-loader?outputStyle=expanded&indentedSyntax'
        }, {
            test: /\.scss/,
            loader: 'style-loader!css-loader!sass-loader?outputStyle=expanded'
        }, {
            test: /\.less/,
            loader: 'style-loader!css-loader!less-loader'
        }, {
            test: /\.styl/,
            loader: 'style-loader!css-loader!stylus-loader'
        }, {
            test: /\.(png|jpg|gif|woff|woff2)$/,
            loader: 'url-loader?limit=8192'
        }, {
            test: /\.(mp4|ogg|svg)$/,
            loader: 'file-loader'
        }]

},
resolve: {
        extensions: ['.js', '.jsx','json'],
        modules: [
           resolve('src'),
           resolve('node_modules')
        ],
        alias: {
            actions: `${defaultSettings.srcPath}/actions/`,
            components: `${defaultSettings.srcPath}/components/`,
            sources: `${defaultSettings.srcPath}/sources/`,
            stores: `${defaultSettings.srcPath}/stores/`,
            styles: `${defaultSettings.srcPath}/styles/`,
            config: `${defaultSettings.srcPath}/config/` + process.env.REACT_WEBPACK_ENV,
            'react/lib/ReactMount': 'react-dom/lib/ReactMount'
        }
    },
};
