/* eslint-disable */
const postcsspresetenv = require('postcss-preset-env');
const postcssnormalize = require('postcss-normalize');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const tailwindcss = require('tailwindcss');

module.exports = ctx => {
  return {
    plugins: [
      tailwindcss({}),
      postcsspresetenv({}),
      autoprefixer({}),
      postcssnormalize({}),
      ...(ctx.env === 'production' ? [cssnano({})] : []),
    ],
  };
};
