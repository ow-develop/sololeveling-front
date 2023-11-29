const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')
const path = require('path')

module.exports = {
  core: {
    builder: 'webpack5'
  },
  stories: [
    // '../pages/**/*.stories.mdx',
    // '../src/**/*.stories.@(js|jsx|ts|tsx)'
    '../src/stories/**/*.stories.@(js|jsx|ts|tsx)'
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-actions',
    '@storybook/addon-controls',
    '@storybook/addon-docs',
    '@storybook/addon-viewport',
    'storybook-dark-mode',
    'storybook-addon-next'
  ],
  typescript: {
    reactDocgen: 'react-docgen-typescript-plugin'
  },
  framework: '@storybook/react',
  webpackFinal: async (config) => {
    config.plugins.push(new TsconfigPathsPlugin({}))

    const fileLoaderRule = config.module.rules.find(
      (rule) => rule.test && rule.test.test('.svg')
    )
    fileLoaderRule.exclude = /\.svg$/

    config.module.rules.push({
      test: /\.svg$/,
      enforce: 'pre',
      loader: require.resolve('@svgr/webpack')
    })

    config.resolve.alias = {
      ...config.resolve.alias,
      '~': path.resolve(__dirname, '../src/')
    }

    config.resolve.modules = [
      ...(config.resolve.modules || []),
      path.resolve('./')
    ]

    return config
  }
}
