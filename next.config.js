/** @type {import('next').NextConfig} */
const withInterceptStdout = require('next-intercept-stdout')

const withTM = require('next-transpile-modules')([
  '@ow-develop/ow-design-system'
])

const ContentSecurityPolicy = `
  ///
`
const securityHeaders = [
  {
    key: 'Content-Security-Policy',
    value: ContentSecurityPolicy.replace(/\n/g, '')
  },
  {
    key: 'Timing-Allow-Origin',
    value: '*'
  }
]

const nextConfig = withTM({
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
    removeConsole: process.env.NEXT_PUBLIC_BRANCH === 'production'
  },
  eslint: {
    ignoreDuringBuilds: true
  },
  pageExtensions: ['page.tsx', 'page.ts', 'page.jsx', 'page.js'],
  env: {
    NEXTAUTH_URL: process.env.NEXTAUTH_URL
  },
  webpack(config, { webpack }) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack']
    })

    config.module.rules.push({
      test: /\.(mov|mp4)$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]'
          }
        }
      ]
    })

    const fallback = config.resolve.fallback || {}
    Object.assign(fallback, {
      crypto: false,
      stream: false,
      assert: false,
      http: false,
      https: false,
      os: false,
      url: false,
      zlib: false
    })
    config.resolve.fallback = fallback
    config.plugins = (config.plugins || []).concat([
      new webpack.ProvidePlugin({
        process: 'process/browser',
        Buffer: ['buffer', 'Buffer']
      })
    ])
    config.ignoreWarnings = [/Failed to parse source map/]
    config.module.rules.push({
      test: /\.(js|mjs|jsx)$/,
      enforce: 'pre',
      loader: require.resolve('source-map-loader'),
      resolve: {
        fullySpecified: false
      }
    })

    return config
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders
      }
    ]
  },
  async rewrites() {
    return [
      {
        source: '/exchange',
        destination:
          'https://api.manana.kr/exchange/price.json?base=KRW&price=1&code=KRW,USD,JPY'
      }
    ]
  }
})

module.exports = withInterceptStdout(
  {
    ...nextConfig
  },
  (text) =>
    text.includes('Duplicate atom key') ||
    text.includes('non-boolean') ||
    text.includes('Expected server HTML') ||
    text.includes('ECONNREFUSED')
      ? ''
      : text
)
