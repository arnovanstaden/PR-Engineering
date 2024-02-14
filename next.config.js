module.exports = {
  async redirects() {
    return [
      {
        source: '/admin',
        destination: 'https://engpr.sanity.studio/',
        permanent: true,
      },
    ]
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
    ],
  },
  sassOptions: {
    prependData: '@import "@styles/variables.scss";',
  },
}