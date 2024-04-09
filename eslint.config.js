import config from '@antfu/eslint-config'

export default config({
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    //
    'test/prefer-lowercase-title': 'off',
  },
})

// parserOptions: {
//         project: 'tsconfig.json',
//         tsconfigRootDir: __dirname,
//         sourceType: 'module',
//       },
