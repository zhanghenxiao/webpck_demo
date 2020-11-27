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
        // 使用插件是file-loader，url-loader会根据limit大小决定是否打包在js文件中成base64，从而减少http 请求
        loader: 'url-loader',
        options:{
          // 设置打包后图片名和扩展后缀
          name: '[name].[ext]',
          // 图片输出路径
          outputPath: '/images',
          // 10240 = 10k,定制大小是否打包base64
          limit: 102400
        }
      }
    }]
  },

}

// npx webpack --config webpackconfig.js 可以配置这个文件打包