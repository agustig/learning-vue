import antfu from "@antfu/eslint-config";

export default antfu({
  formatters: true,
  vue: true,
  rules: {
    "max-len": [
      "error",
      {
        code: 80,
        ignoreUrls: true,
        ignoreStrings: true,
        ignorePattern: "^\\s*var\\s.+=\\s*require\\s*\\(",
      },
    ],
  },
  stylistic: {
    indent: 2, // 4, or 'tab'
    quotes: "double", // or 'double'
    semi: true,
  },
});
