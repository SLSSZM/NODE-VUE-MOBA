module.exports = {
  outputDir: __dirname + '/../server/dist/admin',
  configureWebpack: {
    resolve: {
      alias: {
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views',
      }
    }
  },
  publicPath: process.env.NODE_ENV = 'production' ? '/admin/' : '/'
}