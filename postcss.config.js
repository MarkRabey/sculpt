'use strict'

const pkg = require('./package.json');
const banner = `Sculpt v${ pkg.version }\nCopyright 2017 ${ pkg.author }\nLicensed under MIT (https://github.com/MarkRabey/sculpt/blob/master/LICENSE)`;

module.exports = (ctx) => ({
  use: [
    'postcss-banner',
  ],
  map: ctx.file.dirname.includes('examples') ? false : {
    inline: false,
    annotation: true,
    sourcesContent: true,
  },
  plugins: {
    autoprefixer: { cascade: false },
    'postcss-banner': {
      important: true,
      banner,
    },
  }
});