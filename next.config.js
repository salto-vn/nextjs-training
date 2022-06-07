/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true, // minification , 7x faster than Terser ( Terser is a js parser, more : https://github.com/terser/terser )
  reactStrictMode: true,
  compiler: {
    styledComponents: true, // ssr and displayName are configured by default
    removeConsole: { exclude: ['error', 'log'], }, // remove console.* except console.error - in project ( not includes node_modules ) ( won't show in browser)
  },

  // Modularize Imports ( more : https://nextjs.org/docs/advanced-features/compiler#modularize-imports)
  /* experimental: {
    modularizeImports: {
      'react-bootstrap': {
        transform: 'react-bootstrap/lib/{{member}}',
      },
      lodash: {
        transform: 'lodash/{{member}}',
      },
    },
  }, */

  // only allow images load from domains in list
  images: {
    domains: [
      "localhost",
    ]
  },

  // enum env
  env: {
    SERVER_API: process.env.SERVER_API,
    PUBLIC_URL: process.env.PUBLIC_URL,
  },
}

module.exports = nextConfig
