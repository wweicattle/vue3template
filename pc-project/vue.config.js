module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  lintOnSave: false,
  productionSourceMap: false,
  devServer: {
    disableHostCheck: true,
    port: 8081,
    proxy: {
      '/stockOrder.ashx': {
        target: 'http://tm.lilanz.com/oa/project/rst2',
        pathRewrite: {
          // '^/sto': '/'
        }
      },
      
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        // "assets": "@/assets",
        // "network": "@/network",
        // "components": "@/components",
        // "views": "@/views",
        // "utils": "@/utils",
      }
    }
  }
}
