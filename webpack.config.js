module.exports = {
  entry: ['./src/index.js'],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        include: `${__dirname}/src`,
        loader: 'eslint-loader',
        options: {
          failOnError: true
        }
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: { presets: ['react', 'stage-1', ['es2015', { modules: false }]] }
      }
    ]
  },
  resolve: {
    extensions: ['.js']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  }
};
