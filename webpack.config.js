var nib = require('nib')

module.exports = {
  module: {
    loaders: [
      { test: /\.styl$/, loader: 'style-loader!css-loader!stylus-loader' },
      { test: /\.js$/, loader: 'jsx-loader?harmony' }
    ]
  },
  stylus: {
    use: [nib()]  
  }
}

