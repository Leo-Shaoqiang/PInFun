module.exports = {
  env: {
    NODE_ENV: '"development"'
  },
  defineConstants: {},
  mini: {
    webpackChain (chain, webpack) {
      chain.plugin('analyzer')
        .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin, [])  // 引入打包分析图
      chain.merge({
        modules: {
          rules: {
            myloder:{
              test: /\.tsx?$/,
           exclude: /node_modules/,
	          use: [
	          {
	           loader: 'babel-loader'
	          },
	           {
	           loader: 'ts-loader'
	          } 
	          ]
            }
          }
        }
      })
    },
  },
  h5: {}
}
