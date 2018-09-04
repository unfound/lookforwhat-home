const path = require('path')

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        '@comp': path.resolve(__dirname, 'src/components/')
      }
    }
  }
}
