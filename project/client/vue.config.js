const path = require('path');
const merge = require('webpack-merge');

module.exports = {
  chainWebpack: config => {
    // load stylus variables into each styl file
    config.module
      .rule('stylus')
        .oneOf('normal')
          .use('stylus-loader')
          .loader('stylus-loader')
            .tap(options =>
              merge(options, {
                import: [
                  path.resolve(__dirname, 'src/assets/vars.styl')
                ],
              })
            );
    // add webpack aliases
    config.resolve.alias
      .set('@layout', path.resolve(__dirname, 'src/layout/'))
      .set('@components', path.resolve(__dirname, 'src/components'))
      .set('@actions', path.resolve(__dirname, 'src/store/actions'))
      .set('@router', path.resolve(__dirname, 'src/routes.js'))
      .set('@helpers', path.resolve(__dirname, 'src/helpers'));
  },
  // add dev server proxy
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:8000'
      }
    },
  },
  // prefix assets pathes
  configureWebpack: {
    output: {
      publicPath: process.env.NODE_ENV === 'production' ? '/static/' : '/',
    }
  }
}
