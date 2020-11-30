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
      // 只能以这样的结尾图片后缀才能进行打包
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
    },{
      // 样式文件后缀符合以下才能进行打包
      test: /\.(css|scss)$/,
      use:[
        // 都需设置的模块
        'style-loader',
        {
          // 打包css文件模块
          loader:'css-loader',
          options: {
            // 设置css 文件中还引入scss等其他的样式文件，会执行后面的sass-loader
            importLoaders: 2,
            // scss样式的模块化使用，让每个文件不会冲突，若没有使用到scss模块化时需删除
            modules: true
          }
        },
        // 打包scss文件模块
        'sass-loader',
        // 对c3 新特性增加厂商前缀模块 -webkit
        'postcss-loader'
      ]
    }]
  },

}

// npx webpack --config webpackconfig.js 可以配置这个文件打包