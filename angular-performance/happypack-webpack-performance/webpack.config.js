var path = require('path');
var HappyPack = require('happypack');

var dummyLoader = {
  loader: 'dummy-loader',
  query: {
    dependency: path.resolve(__dirname, 'dependency.txt')
  }
}

module.exports = {
  entry: './main.js',
   output: {
        filename: 'bundle.webpack.js',
        path: path.resolve(__dirname, 'dist')
    },
  module: {
    loaders: [
      {
        test: /\.txt$/,
        use: [
		 // 'happypack/loader'
          (dummyLoader)
        ]
      }
    ]
  },
  plugins: [
    new HappyPack({
      loaders: [dummyLoader],
	  threads: 6
    })
  ]
}
