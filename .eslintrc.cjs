/* eslint-env node */
module.exports = {
  root: true,
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  'rules': {
    // 'no-undef': 'warn' // default: 'error'
    'block-scoped-var': 'error'
  },
  // 'overrides': [
  //   {
  //     'files': ['**/playwright.config.js'],
  //     'rules': {
  //       'no-undef': 'off'
  //     }
  //   }
  // ]

}
