const withNextIntl = require('next-intl/plugin')('./src/libs/i18n/i18n.ts')

module.exports = withNextIntl({
  async headers() {
    return [
      {
        source: '/public/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, must-revalidate',
          },
        ],
      },
    ]
  },
})
