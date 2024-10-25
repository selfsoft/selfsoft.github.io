const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html"],
  theme: {
    extend: {},
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'node_modules/@fortawesome/fontawesome-free/webfonts'),
          to: path.resolve(__dirname, 'webfonts')
        }
      ]
    })
  ],
}

