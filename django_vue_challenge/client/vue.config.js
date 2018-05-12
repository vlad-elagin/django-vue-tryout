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
                  path.resolve(__dirname, 'src/assets/global.styl')
                ],
              })
            );
    // add webpack aliases
    config.resolve.alias
      .set('@layout', path.resolve(__dirname, 'src/layout/'))
      .set('@components', path.resolve(__dirname, 'src/components'))
  }
}
