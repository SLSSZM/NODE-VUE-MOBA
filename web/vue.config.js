module.exports = {
  outputDir: __dirname + '/../server/public/web',
  configureWebpack: {
    resolve: {
      alias: {
        'assets': '@/assets',
        'components': '@/components',
        'views': '@/views',
      }
    }
  },
  // publicPath: process.env.NODE_NEV = 'production' ? '/web/' : '/'
}