'use strict'
const path = require('path')

const PATH_CLIENT = path.join(__dirname, '..')
const PATH_PUBLIC = path.join(PATH_CLIENT, 'public')

module.exports = {
    devtool: 'inline-source-map',
    mode: 'development',
    entry: path.join(PATH_CLIENT, 'src/index.js'),
    devServer: {
        contentBase: PATH_PUBLIC,
        port: 9000,
        // open: true
    },
	output: {
		filename: 'app.js',
		path: path.join(PATH_CLIENT, 'public')
	},
    module: {
    },
    resolve: {
        extensions: [ '.js' ]
    }
};
