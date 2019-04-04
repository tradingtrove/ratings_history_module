module.exports = {
    extends: './node_modules/eslint-config-airbnb/index.js', 
   "parserOptions": { "ecmaVersion": 6 } ,
   plugins: [
    'react',
    'jest',
  ],
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
    "jest/globals": true,
  },
    "rules": {
      "jest/no-disabled-tests": "warn",
      "jest/no-focused-tests": "error",
      "jest/no-identical-title": "error",
      "jest/prefer-to-have-length": "warn",
      "jest/valid-expect": "error"
    },
  
};
