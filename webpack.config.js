const path = require('path');
module.exports = {
  entry : './main.js',
  ouptut : {
    path : path.resolve(__dirname + './build'),
    filename : 'bundle.js'
  },
  module : {
    loaders : [
      {
        test : /\.js$/,
        loader : 'babel',
        exclude : ['node_modules']
      }
    ]
  }
}
