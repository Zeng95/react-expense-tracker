module.exports = {
  extends: 'stylelint-config-sass-guidelines',
  plugins: ['stylelint-scss', 'stylelint-order'],
  rules: {
    'scss/at-rule-no-unknown': [true, { ignoreAtRules: ['tailwind'] }],
    'max-nesting-depth': [2, { ignoreAtRules: ['/^&-/'] }],
    'color-named': 'always-where-possible'
  }
}
