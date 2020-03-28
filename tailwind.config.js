// const { colors } = require('tailwindcss/defaultTheme');

module.exports = {
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    // colors: {
    //   black: colors.black,
    //   white: colors.white,
    //   gray: colors.gray,
    //   red: colors.red,
    //   yellow: colors.yellow,
    //   green: colors.green,
    //   blue: colors.blue,
    //   indigo: colors.indigo,
    //   purple: colors.purple,
    // },
    fontFamily: {
      display: ['Ubuntu Condensed', 'sans-serif'],
      body: ['Ubuntu ', 'sans-serif'],
    },
    borderWidth: {
      default: '1px',
      '0': '0',
      '2': '2px',
      '4': '4px',
    },
    extend: {
      colors: {
        cyan: '#9cdbff',
      },
      spacing: {
        '96': '24rem',
        '128': '32rem',
      },
    },
  },
  variants: {
    backgroundColor: ['responsive', 'active', 'focus', 'hover'],
  },
  plugins: [],
};
