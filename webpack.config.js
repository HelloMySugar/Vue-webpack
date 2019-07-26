const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: path.join(__dirname, './src/index.js'),
  output: {
    path: path.join(__dirname, './dist'),  // 输出目录
    publicPath: '/dist',  //指定资源文件引用的目录
    filename: 'main.js'  // 指定输出文件的名称
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            css: ExtractTextPlugin.extract({
              use: 'css-loader',
              fallback: 'vue-style-loader'
            })
          }
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: 'css-loader',
          fallback: 'style-loader'
        })
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new ExtractTextPlugin('main.css'),
  ]
}
