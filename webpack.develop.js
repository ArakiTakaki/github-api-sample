const HtmlWebpackPlugin = require('html-webpack-plugin');

const fs = require('fs');
fs.copyFile('develop.env','.env',function(err){
  if(err) console.error(err.stack);
  console.log('file copy done!');
});

const dotenv = require('dotenv').config().parsed;
let dir = __dirname + '/dist';
if (dotenv.DIR_PATH != '') dir = dotenv.DIR_PATH;
console.log(dotenv.TEST)

module.exports = {
  mode: 'development',
  entry: [
    './src/index.jsx'
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.svg$/,
        loader: "svg-react-loader"
      },
      {
        test: /\.html$/,
        loader: "html-loader"
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          "css-loader?importLoader=1&modules&localIdentName=[path]___[name]__[local]___[hash:base64:5]"
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.html','.css']
  },
  plugins: [
    new HtmlWebpackPlugin({ template: __dirname + "/public/index.html" })
  ],
  output: {
    path: dir,
    filename: 'js/bundle_[hash:4].js'
  }
};