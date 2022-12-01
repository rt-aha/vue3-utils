/* eslint-env node */

module.exports = {
  extends: '@antfu',
  rules: {
    // common
    'semi': ['warn', 'always'],
    '@typescript-eslint/semi': ['warn', 'always'],
    'curly': ['warn', 'all'],

    // vue
    'vue/component-tags-order': ['error', {
      order: ['template', 'script', 'style'],
    }],
    'vue/v-on-event-hyphenation': ['off', 'never'], // 關閉自定義事件強制 kebab-case 格式

    // other
    'no-console': ['warn'],
  },
};
