const fs = require('fs');
fs.copyFile('production.env','.env',function(err){
  if(err) console.error(err.stack);
  console.log('file copy done!');
});

const dotenv = require('dotenv').config().parsed;
let dir = path.resolve() + '/dist';

if (dotenv.DIR_PATH != '') dir = dotenv.DIR_PATH;
console.log(dotenv.TEST)

module.exports = {
  mode: 'production',
  entry: ['./src/index.jsx'],
  module: {
    rules: require('./common/loader')
  },
  resolve: {
    extensions: require('./common/resolve')
  },
  plugins: require('./common/plugins'),
  output: {
    path: dir,
    filename: 'js/bundle_[hash:4].js'
  }
};