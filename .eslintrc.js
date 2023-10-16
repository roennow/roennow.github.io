module.exports = {
  root: true,
  extends: ["plugin:tailwindcss/recommended"],
  overrides: [
    {
      files: ['*.html'],
      parser: '@angular-eslint/template-parser',
    },
  ],
};
