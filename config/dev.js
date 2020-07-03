module.exports = {
  env: {
    NODE_ENV: '"development"'
  },
  defineConstants: {},
  mini: {
    webpackChain (chain, webpack) {
      chain.plugin('analyzer')
        .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin, [])  // 引入打包分析图
      // chain.module
      //   .rule('myloader')
      //     .test(/\.tsx?$/)
      //     .exclude
      //       .add(/node_modules/)
      //     .use('babel-loader',)  
    },
  },
  h5: {}
}
