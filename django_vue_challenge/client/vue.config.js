const path = require('path');
const merge = require('webpack-merge');

module.exports = {
  chainWebpack: config => {
    config.module
      .rule('stylus')
        .oneOf('normal')
          .use('stylus-loader')
          .loader('stylus-loader')
            .tap(options =>
              merge(options, {
                import: [
                  path.resolve(__dirname, 'src/assets/global.styl')
                ],
              })
            )
  }
}
