const configureWebpack = require('./webpack.config.js');

const isDev = (process.env.NODE_ENV === 'development');

module.exports = {
    publicPath: (isDev) ? '/' : '/HadesSpace/',
    productionSourceMap: isDev,
    css: {
        sourceMap: isDev,
    },
    configureWebpack,
};
