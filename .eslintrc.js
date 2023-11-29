module.exports = {
  ...require('@ow-develop/ow-fe-config/eslint/next'),
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: './tsconfig.json',
    sourceType: 'module'
  },
  rules: {
    'react/display-name': 'off'
  }
}
