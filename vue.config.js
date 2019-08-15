const path = require('path');
const resolve = dir => path.join(__dirname, dir);
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  publicPath: process.env.VUE_APP_PUBLIC_PATH,
  outputDir: process.env.VUE_APP_OUTPUT_DIR,
  //assetsDir: 'ddd',
  devServer: {
    proxy: {
      '/mock': {
        target: 'https://www.easy-mock.com',
        changeOrigin: true,
        pathRewrite: {
          '^/mock': 'mock'
        }
      }
    },
    https: true,
    open: true,
    overlay: true
  },
  configureWebpack: config => {
    if (process.env.VUE_APP_ENV === 'prd') {
      // 为生产环境修改配置...
      const plugins = [];
      //生产包移除console
      plugins.push(
        new UglifyJsPlugin({
          uglifyOptions: {
            compress: {
              //删除console.*
              drop_console: true,
              drop_debugger: true
              //删除console.log
              //pure_funcs: ['console.log']
            }
          },
          sourceMap: false,
          parallel: true
        })
      );
      config.plugins = [...config.plugins, ...plugins];
    } else {
      // 为开发环境修改配置...
    }

    config.externals = {
      /*
      jQuery是jquery库对外提供的全局变量
      jquery123是自定义的变量，可以任意取，然后在需要import的地方使用  import xxx from 'jquery123'，即可实现将jquery库不打包在文件里面
      */
      jquery123: 'jQuery'
    };
  },
  chainWebpack: config => {
    // 添加别名
    config.resolve.alias
      .set('@', resolve('src'))
      .set('@plugins', resolve('src/plugins'))
      .set('@components', resolve('src/components'));
  },
  productionSourceMap: false, //生产环境的 source map
  css: {
    extract: process.env.NODE_ENV !== 'development'
  }
};
