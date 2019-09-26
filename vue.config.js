module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  productionSourceMap: false,
  devServer: {
    open: true,
    proxy: {
      '/api': {
        target: 'https://easy-mock.com/mock/5c4d6266857c7f670bc96b76/example',
        changeOrigin: true,
        pathRewrite: {
          '/api': '',
        },
      },
    },
  },
};
