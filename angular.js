module.exports = {
  "env": {
    "browser": true
  },
  // https://github.com/Gillespie59/eslint-plugin-angular
  "plugins": [
    "angular"
  ],
  "globals": {
    "webcard": true,
    "angular": true
  },
  "rules": {
    "consistent-this": 0,
    "no-use-before-define": 0,
    "valid-jsdoc": 0,
    "angular/no-directive-replace": 2,
    "angular/no-http-callback": 2,
    "angular/no-services": [0, ["$http", "$resource", "Restangular"]],
    "angular/controller-as": 1,
    // "angular/controller-as-vm": [1, "vm"],
    "angular/file-name": [2, {"typeSeparator":"dot", "ignoreTypeSuffix":true}],
    "angular/di": [2, "$inject"], // Sortierung: $text, dann UPPERCASE, dann lowercase
    "angular/di-order": [1, true],
// eslint-plugin-angular-config
    "angular/angularelement": 1,
    "angular/controller-as-route": 2,
    "angular/controller-name": [2, "/[A-Z].*Controller$/"],
    "angular/deferred": 0,
    "angular/definedundefined": 2,
    "angular/directive-name": 0,
    "angular/component-limit": [0, 1],
    "angular/document-service": 2,
    "angular/empty-controller": 0,
    "angular/filter-name": 0,
    "angular/foreach": 0,
    "angular/function-type": 0,
    "angular/interval-service": 2,
    "angular/json-functions": 2,
    "angular/log": 2,
    "angular/module-getter": 2,
    "angular/module-name": 0,
    "angular/module-setter": 2,
    "angular/no-angular-mock": 0,
    "angular/no-controller": 0,
    "angular/no-cookiestore": 2,
    "angular/no-jquery-angularelement": 2,
    "angular/no-private-call": 2,
    "angular/no-service-method": 2,
    "angular/on-watch": 2,
    "angular/rest-service": 0,
    "angular/service-name": 2,
    "angular/timeout-service": 2,
    "angular/typecheck-array": 2,
    "angular/typecheck-date": 2,
    "angular/typecheck-function": 2,
    "angular/typecheck-number": 2,
    "angular/typecheck-object": 2,
    "angular/typecheck-string": 2,
    "angular/watchers-execution": [0, "$digest"],
    "angular/window-service": 2
  }
}
