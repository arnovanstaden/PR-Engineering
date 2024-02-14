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
    deviceSizes: [600, 768, 991, 1200, 1920, 2048, 3840],
  },
  sassOptions: {
    prependData: '@import "@styles/variables.scss";',
  },
}