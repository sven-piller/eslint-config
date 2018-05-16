module.exports = {
  "env": {
    "browser": true,
    "jasmine": true,
    "phantomjs": true,
    "node": true,
    "es6": false
  },
  "globals": {
    "angular": true
  },
  "plugins": [
    "jasmine"
  ],
  "extends": "plugin:jasmine/recommended",
  "rules": {
    "func-names": 0,
    "max-len": 0
    // "arrow-body-style": [1, "always"],
    // "arrow-parens": 2,
    // "arrow-spacing": [1, { "before": true, "after": true }],
    // "no-confusing-arrow": 1
  }
}
