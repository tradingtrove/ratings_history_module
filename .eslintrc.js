module.exports = {
    extends: './node_modules/eslint-config-airbnb/index.js', 
   "parserOptions": { "ecmaVersion": 6 } ,
   plugins: [
    'react',
  ],
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
  },
};