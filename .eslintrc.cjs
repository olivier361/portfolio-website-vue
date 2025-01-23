/* eslint-disable @stylistic/quote-props */
/* eslint-env node */

module.exports = {
  root: true,
  'extends': [
    'plugin:vue/vue3-strongly-recommended', // https://eslint.vuejs.org/
    'eslint:recommended',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  'plugins': ['@stylistic'],
  'rules': {
    //// CODE-QUALITY RULES: ////

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
    'func-style': ['error', 'declaration', { 'allowArrowFunctions': true }],
    'max-classes-per-file': 'error',
    'no-use-before-define': [
      'error', {
        'functions': false,
        'classes': false,
        'variables': true,
        'allowNamedExports': false,
      },
    ],
    'new-cap': ['error', { 'newIsCap': true }],
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
    'no-unneeded-ternary': ['error', { 'defaultAssignment': false }],
    'no-unused-expressions': ['error', { 'allowTernary': true }],
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

    //// FORMATTING RULES: ////

    // NOTE: ESLint formatting rules were deprecated in v8.53.0
    // we are now using the '@stylistic/eslint-plugin' plugin for formatting rules.
    // ESLint Stylistic Rule Docs: https://eslint.style/packages/default#rules
    /// ERRORS:
    '@stylistic/array-bracket-newline': ['error', { 'multiline': true }],
    '@stylistic/array-bracket-spacing': ['error', 'never'],
    '@stylistic/arrow-parens': ['error', 'always'],
    '@stylistic/arrow-spacing': 'error',
    '@stylistic/block-spacing': 'error',
    '@stylistic/brace-style': ['error', 'stroustrup', { 'allowSingleLine': true }],
    '@stylistic/comma-dangle': ['error', 'always-multiline'],
    '@stylistic/comma-spacing': 'error',
    '@stylistic/computed-property-spacing': ['error', 'never'],
    '@stylistic/dot-location': ['error', 'property'],
    '@stylistic/eol-last': ['error', 'always'],
    '@stylistic/function-call-spacing': 'error',
    '@stylistic/implicit-arrow-linebreak': ['error', 'beside'],
    '@stylistic/indent': ['error', 2],
    '@stylistic/indent-binary-ops': ['error', 2],
    '@stylistic/key-spacing': 'error',
    '@stylistic/keyword-spacing': 'error',
    '@stylistic/linebreak-style': ['error', 'unix'],
    // '@stylistic/max-len': ['warn', { 'code': 100, ignoreUrls: true }], // TODO: enable once we reduced line lenghts
    '@stylistic/max-statements-per-line': ['error', { 'max': 2 }],
    '@stylistic/multiline-ternary': ['error', 'always-multiline'],
    '@stylistic/new-parens': 'error',
    '@stylistic/newline-per-chained-call': ['error', { 'ignoreChainWithDepth': 4 }],
    '@stylistic/no-confusing-arrow': 'error',
    '@stylistic/no-extra-semi': 'error',
    '@stylistic/no-floating-decimal': 'error',
    '@stylistic/no-mixed-operators': 'error',
    '@stylistic/no-mixed-spaces-and-tabs': ['error', 'smart-tabs'],
    '@stylistic/no-multi-spaces': 'error',
    '@stylistic/no-multiple-empty-lines': ['error', { 'max': 1, 'maxBOF': 0 }],
    '@stylistic/no-trailing-spaces': 'error',
    '@stylistic/no-whitespace-before-property': 'error',
    '@stylistic/nonblock-statement-body-position': ['error', 'beside'],
    '@stylistic/object-curly-newline': ['error', { 'consistent': true }],
    '@stylistic/object-curly-spacing': ['error', 'always'],
    '@stylistic/object-property-newline': [
      'error', {
        'allowAllPropertiesOnSameLine': true,
      },
    ],
    '@stylistic/quote-props': ['error', 'consistent-as-needed'],
    '@stylistic/quotes': ['error', 'single', { 'avoidEscape': true }],
    '@stylistic/rest-spread-spacing': ['error', 'never'],
    '@stylistic/semi': ['error', 'always'],
    '@stylistic/semi-spacing': 'error',
    '@stylistic/semi-style': ['error', 'last'],
    '@stylistic/space-before-blocks': 'error',
    '@stylistic/space-before-function-paren': [
      'error', {
        'anonymous': 'never',
        'named': 'never',
        'asyncArrow': 'always',
      },
    ],
    '@stylistic/space-in-parens': ['error', 'never'],
    '@stylistic/space-infix-ops': 'error',
    '@stylistic/space-unary-ops': 'error',
    // '@stylistic/spaced-comment': ['error', 'always', {
    //   'block': { 'balanced': true }
    // }],
    '@stylistic/switch-colon-spacing': 'error',
    '@stylistic/template-curly-spacing': 'error',
    '@stylistic/wrap-iife': ['error', 'any'],
    '@stylistic/wrap-regex': 'error',

    //// ESLINT-PLUGIN-VUE RULES: ////

    // eslint-plugin-vue Rule Docs: https://eslint.vuejs.org/rules/
    /// OVERRIDE RECOMMENED RULES:
    'vue/singleline-html-element-content-newline': 'off',
    'vue/multiline-html-element-content-newline': [
      'error', {
        'ignoreWhenEmpty': true,
        // 'ignores': ['pre', 'textarea', ...INLINE_ELEMENTS],
        'allowEmptyLines': true,
      },
    ],
    'vue/max-attributes-per-line': ['error', { 'singleline': 5, 'multiline': 5 }],
    'vue/attribute-hyphenation': ['error', 'never'],
  },
  // 'overrides': [
  //   {
  //     'files': ['**/playwright.config.js'],
  //     'rules': {
  //       'no-undef': 'off'
  //     }
  //   }
  // ]
};
