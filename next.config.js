/** @type {import('next').NextConfig} */
const path = require('path')
// ? This configuration allows me to access globally to mixins and variables, without importing the scss file in every scss file where I need.
const nextConfig = {
  output: 'standalone',
  reactStrictMode: true,
  sassOptions: {
    prependData: `
    @import "config.scss";
 `,
    includePaths: [path.join(__dirname, '/src/styles')],
  },
}

module.exports = nextConfig
