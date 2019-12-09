module.exports = {
  extends: ['airbnb', 'prettier', 'prettier/react'],
  env: {
    browser: true,
    node: true,
    jest: true,
  },
  settings: {
    ecmascript: 6,
    jsx: true,
    react: {
      createClass: 'createReactClass',
      version: 'detect',
    },
    'import/core-modules': ['styled-jsx/css'],
  },
  parser: 'babel-eslint',
  plugins: ['react', 'prettier'],
  rules: {
    'class-methods-use-this': 0,
    'global-require': 0,
    'jsx-a11y/anchor-is-valid': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/href-no-hash': 'off',
    'jsx-a11y/img-has-alt': 0,
    'jsx-a11y/interactive-supports-focus': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'max-len': 0,
    'no-await-in-loop': 0,
    'no-confusing-arrow': 0,
    'no-console': 0,
    'no-mixed-operators': 0,
    'no-param-reassign': 0,
    'no-restricted-syntax': 0,
    'no-plusplus': 0,
    'react/destructuring-assignment': [0, 'never'],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/prefer-stateless-function': 0,
    'react/prop-types': 0,
    'react/no-danger': 0,
    'react/jsx-props-no-spreading': 0,
    'import/no-dynamic-require': 0,
    'import/no-mutable-exports': 0,
    'import/prefer-default-export': 0,
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
        optionalDependencies: true,
      },
    ],
    'prettier/prettier': [
      'error',
      {
        printWidth: 100,
        singleQuote: true,
        trailingComma: 'all',
      },
    ],
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      legacyDecorators: true,
    },
  },
};

