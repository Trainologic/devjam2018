const path = require('path');
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');

module.exports = {
    entry: './main.js',
    output: {
        filename: 'bundle.webpack.js',
        path: path.resolve(__dirname, 'dist')
    },
	  module: {
    loaders: [
      { test: /\.txt$/, loader: 'my-loader', exclude: /node_modules/ },
     
    ]
	},
	resolveLoader: {
		alias: {
		'my-loader': path.join(__dirname, 'utils', 'long-loader.js')
    }
  } ,
    plugins: [
    new HardSourceWebpackPlugin()
  ]
}


