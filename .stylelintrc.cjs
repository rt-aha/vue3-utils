module.exports = {
  extends: [
    "stylelint-config-standard",
    "stylelint-config-recommended-vue",
    "stylelint-config-recommended-vue/scss",
    // 排序
    'stylelint-config-recess-order'
  ],
  plugins: [
    "stylelint-scss"
  ],
  rules: {
    "custom-property-pattern": [
      // BEM rule
      "^[a-z]([a-z0-9-]+)?(__([a-z0-9]+-?)+)?(--([a-z0-9]+-?)+){0,2}$",
    ],
    "at-rule-empty-line-before": ["never"],
    "declaration-empty-line-before": ["never"],
    "selector-class-pattern": ".*",
    "no-descending-specificity": null,
      "order/order": [
        "custom-properties",
        "dollar-variables",
        {
          "type": "at-rule",
          "name": "extend"
        },
        {
          "type": "at-rule",
          "name": "include",
          "hasBlock": false
        },
        {
          "type": "at-rule",
          "name": "mixin",
          "hasBlock": false
        },
        "declarations",
        {
          "type": "at-rule",
          "name": "include",
          "hasBlock": true
        },
        {
          "type": "at-rule",
          "name": "mixin",
          "hasBlock": true
        },
        "rules"
      ]
  }
}