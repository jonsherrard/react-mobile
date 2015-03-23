var nib = require('nib')
var path = require('path')

module.exports = {
  module: {
    loaders: [
      { test: /\.styl$/, loader: 'style-loader!css-loader!stylus-loader' },
      { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader' }
    ]
  },

  resolve: {
    root: path.resolve(__dirname, './src'),
    extensions: ['','.js', '.json', '.jsx'],
    modulesDirectories: [
      'components', 'shared', 'screens', 'util', 'config', 'node_modules', 'app', 'src'
    ]
  },
  
  stylus: {
    use: [nib()]  
  }
}

