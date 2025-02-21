export default {
  printWidth: 160,
  singleQuote: false,
  trailingComma: "none",
  tabWidth: 2,
  semi: true,
  plugins: ["prettier-plugin-astro"],
  overrides: [
    {
      files: ["*.astro"],
      options: {
        parser: "astro",
      },
    },
  ],
};
