<<<<<<< HEAD
/*
 * @Author: your name
 * @Date: 2021-08-17 11:54:41
 * @LastEditTime: 2021-08-17 16:11:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \cmusic\vue.config.js
 */
module.exports = {
    /* 部署生产环境和开发环境下的URL：可对当前环境进行区分，baseUrl 从 Vue CLI 3.3 起已弃用，要使用publicPath */
    publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
    /* 输出文件目录：在npm run build时，生成文件的目录名称 */
    outputDir: 'dist',
    /* 放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录 */
    assetsDir: "assets",
    /* 是否在构建生产包时生成 sourceMap 文件，false将提高构建速度 */
    productionSourceMap: false,
    /* 默认情况下，生成的静态资源在它们的文件名中包含了 hash 以便更好的控制缓存，你可以通过将这个选项设为 false 来关闭文件名哈希。(false的时候就是让原来的文件名不改变) */
    filenameHashing: false,
    /* 代码保存时进行eslint检测 */
    lintOnSave: true,
    /* webpack-dev-server 相关配置 */
    devServer: {
      /* 自动打开浏览器 */
      host:"localhost",
      open: true,
      port: 8080, //本地端口号
      https: false,
      hotOnly: false,
      /* 使用代理 */
      proxy: {
        '/api': {
        target: 'http://8.130.175.54:8001',//服务器协议、ip和端口号
        ws: true,//是否代理websockets
        changeOrigin: true,
        pathRewrite:{
          '^/api':''
      	}
      }
    },
  }
}
=======
/*
 * @Author: your name
 * @Date: 2021-08-17 11:54:41
 * @LastEditTime: 2021-08-17 16:11:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \cmusic\vue.config.js
 */
module.exports = {
    /* 部署生产环境和开发环境下的URL：可对当前环境进行区分，baseUrl 从 Vue CLI 3.3 起已弃用，要使用publicPath */
    publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
    /* 输出文件目录：在npm run build时，生成文件的目录名称 */
    outputDir: 'dist',
    /* 放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录 */
    assetsDir: "assets",
    /* 是否在构建生产包时生成 sourceMap 文件，false将提高构建速度 */
    productionSourceMap: false,
    /* 默认情况下，生成的静态资源在它们的文件名中包含了 hash 以便更好的控制缓存，你可以通过将这个选项设为 false 来关闭文件名哈希。(false的时候就是让原来的文件名不改变) */
    filenameHashing: false,
    /* 代码保存时进行eslint检测 */
    lintOnSave: true,
    /* webpack-dev-server 相关配置 */
    devServer: {
      /* 自动打开浏览器 */
      host:"localhost",
      open: true,
      port: 8080, //本地端口号
      https: false,
      hotOnly: false,
      /* 使用代理 */
      proxy: {
        '/api': {
        target: 'http://8.130.175.54:8001',//服务器协议、ip和端口号
        ws: true,//是否代理websockets
        changeOrigin: true,
        pathRewrite:{
          '^/api':''
      	}
      }
    },
  }
}
>>>>>>> 28ebce47bbbce614017e276571cdc758636cb8cf
