const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.sass/,
          use: ['style-loader', 'css-loader', 'sass-ffi/webpack-loader']
        },
      ],
    },
  },
})


