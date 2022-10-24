const path = require('path');
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
  mode: 'development',
  devtool: false,
  context: __dirname,
  entry: './src/index.ts',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'index.js',
  },
  resolve: {
    extensions: ['.ts', '.js', '.json'],
    fallback: {
      fs: false,
      readline: false,
      perf_hooks: false,
      child_process: false,
      http2: false,
      net: false,
      tls: false,
      async_hooks: false,
      dgram: false,
      cluster: false,
      url: false,
      module: false,
    },
    plugins: [new TsconfigPathsPlugin({})],
    alias: {
      '@common-entity': path.resolve(__dirname, '../common-entity/dist'),
      '@src': path.resolve(__dirname, './src'),
    },
  },
  module: {
    rules: [
      {
        test: /\.[tj]s$/,
        // exclude: /(node_modules | test)/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        include: [__dirname, path.resolve(__dirname, '../common-entity/dist')],
      },
    ],
  },
  plugins: [new NodePolyfillPlugin()],
};
