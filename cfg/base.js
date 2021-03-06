/**
 * Created by 子健 on 2016-9-26.
 */
'use strict';
let path = require("path");
let defaultSettings = require("./defaults");

module.exports = {
    port: defaultSettings.port,
    output: {
        path: path.join(__dirname, '../dist/assets'),
        filename: 'app.js',
        publicPath: defaultSettings.publicPath
    },
    devServer: {
        contentBase: './src/',
        hot: true,
        port: defaultSettings.port,
        inline: true,
        stats:{
            colors: true
        },
        process: true,
        publicPath: defaultSettings.publicPath,
    },
    resolve: {
        extensions: ['', '.js', '.jsx'],
    },
    alias: {
        "React": "../src/common/loadReact.js",
        "ReactDom": "../src/common/loadReactDom.js",
    },
    module: {}
};