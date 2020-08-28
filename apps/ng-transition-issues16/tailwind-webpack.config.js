module.exports = {
  module : {
    rules: [
      {
        test   : /\.scss$/,
        loader : 'postcss-loader',
        options: {
          ident  : 'postcss',
          syntax: 'postcss-scss',
          plugins: () => [
            require('postcss-import'),
            require('tailwindcss')('apps/ng-transition-issues16/tailwind.config.js'),
            require('autoprefixer'),
          ]
        }
      }
    ]
  }
};
