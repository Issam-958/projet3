const atImport = require("postcss-import");
const autoprefixer = require("autoprefixer");
const postcssNested = require("postcss-nested");

module.exports = {
  plugins: [atImport, autoprefixer, postcssNested],
};
