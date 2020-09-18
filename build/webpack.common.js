const path = require('path');
const HtmlWebpackPlugim = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const commonConfig = {
  entry: {
    index: '../index.js',
    // about: './about.js',
  },
  output: {
    filename: '[name].js',
    path: path.join(__dirname, '../dist')
  },
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
      {
        test: /\.js$/,
        exclude: '/node_modules',
        loader: 'babel-loader',
        options: {
          "presets": [
            [
              "@babel/preset-env",
              {
                "useBuiltIns": "usage"
              }
            ]
          ]
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugim({
      template: './public/index.html',
    }),
    new CleanWebpackPlugin()
  ]
}

module.exports = commonConfig;