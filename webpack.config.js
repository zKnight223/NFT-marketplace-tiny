module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|ts|jsx|tsx)$/,
        loader: require.resolve('@open-wc/webpack-import-meta-loader'),
      },
    ],
  },
}
