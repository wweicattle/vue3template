module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
    productionSourceMap: false,
    lintOnSave: false,
    css: {
      loaderOptions: {
        css: {},
        postcss: {
          plugins: [
            require('postcss-px2rem')({
              remUnit: 37.5
            })
          ]
        }
      }
    },
    configureWebpack: {
      resolve: {
        alias: {
          "assets": "@/assets",
          "network": "@/network",
          "components": "@/components",
          "views": "@/views",
          "utils": "@/utils",
        }
      }
    }
  }
  