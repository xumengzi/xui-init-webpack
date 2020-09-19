onst path = require('path');
const HtmlWebpackPlugim = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
module.exports = {
  entry: {
    index: './index.js',
    // about: './about.js',
  },
  mode: 'development',
  output: {
    filename: '[name].js',
    path: path.join(__dirname, 'dist')
  },
  // optimization: {
  //   usedExports: true
  // },
  // devtool: 'cheap-module-source-map',
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[path][name].[ext]'
          }
        }
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'file-loader',
          }
        ]
      },
      // {
      //   test: /\.js$/,
      //   exclude: '/node_modules',
      //   loader: 'babel-loader',
      //   options: {
      //     "presets": [
      //       [
      //         "@babel/preset-env",
      //         {
      //           "useBuiltIns": "usage"
      //         }
      //       ]
      //     ]
      //   }
      // }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
  },
  plugins: [
    new HtmlWebpackPlugim({
      template: './public/index.html',
    }),
    new CleanWebpackPlugin()
  ]
}