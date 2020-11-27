const path = require('path')

module.exports = {
  // 打包模式一行product还是多行development
  mode: 'development',
  // 打包文件
  entry: './src/index.js',
  output: {
    // 打包导出文件名及路径
    filename: 'bundle.js',
    path: path.resolve(__dirname,'dist')
  },
  module :{
    rules:[{
      // 图片后缀
      test: /\.(png|jpg|gif)$/,
      use: {
        // 使用插件
        loader: 'file-loader',
      }
    }]
  },

}

// npx webpack --config webpackconfig.js 可以配置这个文件打包