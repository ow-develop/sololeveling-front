module.exports = {
  '*.+(ts|tsx)': [() => 'npx tsc -p tsconfig.json --noEmit'],
  '**/*.+(ts|tsx|js|jsx)': ['eslint --fix --cache', 'prettier --write']
}
