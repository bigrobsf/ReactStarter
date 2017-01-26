module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    './src/index.js'
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      include: path.join(__dirname, 'src'),
      exclude: /node_modules/,
      loaders: ['babel'],
      query: {
        presets: ['react', 'es2015', 'stage-0']
      },
      {
        test: /\.scss$/,
        loaders: ["style", "css", "sass"]
      }
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  }
};
