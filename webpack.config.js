const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');


const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: 'src/client/index.html',
  filename: '../../index.html',
  inject: 'body'
})

const _PORT = 9998;
const SRC_DIR =  path.join(__dirname, 'src/client');
const DEST_DIR =  path.join(__dirname, 'dest/client');

module.exports = {
  entry:path.join(SRC_DIR , 'index.jsx'),
  output:{
    path:DEST_DIR,
    filename:'bundle.js'
  },
  devServer: {
    inline:true,
    port: _PORT
  },
  module:{
    loaders:[
      {
        test:/\.jsx?/,
        loader:'babel-loader',
        exclude:/node_modules/
      }
    ]
  },
  plugins: [HtmlWebpackPluginConfig]
}
