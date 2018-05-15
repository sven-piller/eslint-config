module.exports = {
  "env": {
    "node": true,
    "mocha": true
  },
  "extends": "standard",
  "rules": {
    "semi": [2, "always"],
    "no-extra-semi": 2,
    "no-console": 1, // disallow use of console (off by default in the node environment)
    "block-scoped-var": 1, // treat var statements as if they were block scoped (off by default)
    "no-multi-spaces": [1, {"ignoreEOLComments": true}], // disallow use of multiple spaces
    "no-warning-comments": 1, // disallow usage of configurable warning terms in comments, e.g. TODO or FIXME (off by default)
    "brace-style": [2, "1tbs", { "allowSingleLine": true }], // enforce one true brace style (off by default)
    "camelcase": 1, // require camel case names
    "func-names": [1, "as-needed"], // require function expressions to have a name (off by default)
    "max-len": [1, 120, {
      "ignoreComments": true,
      "ignoreTrailingComments": true
    }], // enforce a maximum line length
    "max-statements": [1, 25], // enforce a statement length
    "space-before-function-paren": [1, {
      "anonymous": "always",
      "named": "never"
    }] // Require or disallow a space before function parenthesis
  }
}
