import js from '@eslint/js';
import globals from 'globals';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';

export default {
  extends: [
    js.configs.recommended,
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  env: {
    browser: true,
    es6: true,
  },
  globals: {
    ...globals.browser,
  },
  plugins: ['react', 'react-hooks'],
  rules: {
    // Add any custom rules here if needed
    'react/prop-types': 'off', // Disable prop-types check (if using TypeScript, you could disable this rule)
  },
};
