/* eslint-disable @stylistic/array-bracket-newline */
/* eslint-env node */
// TODO:  re-enable ESLint later after we are done configuring rules.
// This makes commiting new rules easier without the files
// formatting also getting changed all the time.

module.exports = {
  root: true,
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  'plugins': ['@stylistic'],
  'rules': {
    //// CODE-QUALITY RULES:

    // ESLint Rule Docs: https://eslint.org/docs/latest/rules/
    /// ERRORS:
    // 'no-undef': 'warn' // default: 'error'
    'block-scoped-var': 'error',
    'no-duplicate-imports': 'error',
    'no-template-curly-in-string': 'error',
    'require-atomic-updates': 'error',
    'default-case': 'error',
    'default-case-last': 'error',
    'eqeqeq': ['error', 'smart'],
    'func-style': ['error', 'declaration', {
      'allowArrowFunctions': true,
    }],
    'max-classes-per-file': 'error',
    'no-use-before-define': ['error', {
        'functions': false,
        'classes': false,
        'variables': true,
        'allowNamedExports': false,
    }],
    'new-cap': ['error', {
      'newIsCap': true,
    }],
    'no-alert': 'error',
    'no-empty-function': 'error',
    'no-eval': 'error',
    'no-implicit-globals': 'error',
    'no-implied-eval': 'error',
    'no-label-var': 'error',
    'no-lone-blocks': 'error',
    'no-lonely-if': 'error',
    'no-loop-func': 'error',
    'no-multi-assign': 'error',
    'no-param-reassign': 'error',
    'no-return-assign': 'error',
    'no-script-url': 'error',
    'no-shadow': 'error',
    'no-unneeded-ternary': ['error', {
      'defaultAssignment': false,
    }],
    'no-unused-expressions': ['error', {
      'allowTernary': true,
    }],
    'no-useless-concat': 'error',
    'no-useless-escape': 'error',
    'no-var': 'error',
    'prefer-arrow-callback': 'error',
    'prefer-const': 'error',
    'prefer-exponentiation-operator': 'error',
    'prefer-promise-reject-errors': 'error',
    // 'prefer-template': 'error',
    'require-await': 'error',
    // 'sort-imports': 'error',
    /// WARNINGS:
    'camelcase': 'warn',
    'curly': ['warn', 'multi-line', 'consistent'],
    'no-console': 'warn',
    // 'no-warning-comments': ['warn', {
    //   'terms': ['todo'],
    //   'decoration': ['/', '*']
    // }],

    //// FORMATTING RULES:

    // NOTE: ESLint formatting rules were deprecated in v8.53.0
    // we are now using the '@stylistic/eslint-plugin' plugin for formatting rules.
    // ESLint Stylistic Rule Docs: https://eslint.style/packages/default#rules
    /// ERRORS:
    '@stylistic/array-bracket-newline': ["error", { "multiline": true }],
    '@stylistic/array-bracket-spacing': ["error", "never"],
    '@stylistic/arrow-parens': ["error", "always"],
    '@stylistic/arrow-spacing': "error",
    '@stylistic/block-spacing': "error",
    '@stylistic/brace-style': ["error", "stroustrup", { "allowSingleLine": true }],
    '@stylistic/comma-dangle': ["error", "always-multiline"],
    '@stylistic/comma-spacing': "error",
    '@stylistic/computed-property-spacing': ["error", "never"],
    '@stylistic/dot-location': ["error", "property"],
    '@stylistic/eol-last': ["error", "always"],
    '@stylistic/function-call-spacing': 'error',
    '@stylistic/implicit-arrow-linebreak': ["error", "beside"],
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
