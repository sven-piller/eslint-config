# eslint-config

Highly opinionated ESLint config for personal projects.

Based on semistandard.

## Installation

```sh
npm install -D -E eslint eslint-config-angular eslint-config-standard eslint-plugin-angular eslint-plugin-import eslint-plugin-jasmine eslint-plugin-mocha eslint-plugin-node eslint-plugin-promise eslint-plugin-protractor eslint-plugin-react eslint-plugin-standard
# note that the first line modules are required peer dependencies
npm install -D -E @sven-piller/eslint-config-piller
```

## Getting started

```js
// ./.eslintrc.json
{
  "root": true,
  "extends": "@svenpiller/eslint-config"
}

// ./public/.eslintrc.json
{
  "extends": "@svenpiller/eslint-config/angular"
}
```

Read up on how to use [sharable configs](http://eslint.org/docs/developer-guide/shareable-configs) at the eslint website.

For more details see [eslint-config-standard](https://github.com/feross/eslint-config-standard)

## Release History

- 1.0.0 Initial release

## License

[MIT](http://opensource.org/licenses/MIT) © Sven Piller
