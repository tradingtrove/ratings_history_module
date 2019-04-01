module.exports = {
    extends: './node_modules/eslint-config-airbnb/index.js', 
   "parserOptions": { "ecmaVersion": 6 } ,

   overrides: [
    Object.assign(
      {
        files: [ '**/*.test.js' ],
        env: { jest: true },
        plugins: [ 'jest' ],
      },
      require('eslint-plugin-jest').configs.recommended
    )
  ]
};