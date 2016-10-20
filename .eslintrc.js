module.exports = {
  extends: [
    'standard',
    'standard-react'
  ],
  plugins: [
    'standard',
    'react',
    'promise'
  ],
  parser: 'babel-eslint',
  globals: {
    nw: true
  },
  env: {
    browser: true,
    commonjs: true,
    node: true,
    es6: true
  }
}
