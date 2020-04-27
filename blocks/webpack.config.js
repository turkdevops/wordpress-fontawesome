module.exports = {
	entry: './font-awesome/index.js',
	output: {
		path: __dirname,
		filename: './font-awesome/block.build.js',
  },
	module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
};
