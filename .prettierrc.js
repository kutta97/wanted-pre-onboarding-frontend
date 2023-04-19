module.exports = {
  trailingComma: 'es5',
  tabWidth: 2,
  semi: true,
  singleQuote: true,

  importOrder: [
    '^@consts/(.*)$',
    '^@utils/(.*)$',
    '^@components/(.*)$',
    '^@api/(.*)$',
    '^@hooks/(.*)$',
    '^@pages/(.*)$',
    '^[./]',
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
};
