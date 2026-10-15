const selectorNestedPattern =
  /^(?:[>+~]\s*\S[\s\S]*|&(?!:where\(\s*&\s*\))(?:\S[\s\S]*|\s*[>+~]\s*\S[\s\S]*))$/;

/** @type {import('stylelint').Config} */
export default {
  ignoreFiles: [
    "**/node_modules/**",
    "**/dist/**",
    "**/website/**",
    "**/coverage/**",
    "**/bundled-single-file/**",
  ],
  rules: {
    "selector-nested-pattern": [selectorNestedPattern, { splitList: true }],
  },
};
