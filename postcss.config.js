/* eslint-disable */
const postcsspresetenv = require('postcss-preset-env');
const postcssnormalize = require('postcss-normalize');
const postcssimport = require('postcss-import');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const tailwindcss = require('tailwindcss');

module.exports = ctx => {
  return {
    plugins: [
      postcssimport({}),
      tailwindcss({}),
      postcsspresetenv({}),
      autoprefixer({}),
      postcssnormalize({}),
      ...(ctx.env === 'production'
        ? [
            cssnano({
              preset: ['default', { discardComments: { removeAll: true } }],
            }),
          ]
        : []),
    ],
  };
};
