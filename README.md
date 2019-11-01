# hexo-plugin-starter

[![NPM Version][npm-version-image]][npm-url]
[![LICENSE][license-image]][license-url]
[![Build Status][travis-image]][travis-url]
[![Coverage Status][coveralls-image]][coveralls-url]
[![dependencies Status][dependencies-image]][dependencies-url]
[![devDependencies Status][devDependencies-image]][devDependencies-url]

A starter for create a new hexo plugin.

## Installation

```sh
npm install hexo-plugin-starter
```

## Usages
```js
foo(bar);
```

## Starter Guide
- clone repository

```sh
git clone https://github.com/dailyrandomphoto/hexo-plugin-starter.git
# if your plugin will be very simple, just a single file
git checkout simple
```
- set up git

```sh
rm -rf .git
git init
git remote add origin <your-url>
```
- find and replace
  - find all and replace `dailyrandomphoto` to your **username**
  - find all and replace `hexo-plugin-starter` to your **plugin name**
- start hack
  - fix **TODO**s in index.js
  - add test codes in test.js
- test in a hexo site

```sh
cd /path/to/your-hexo-site/
npm install /path/to/your-plugin/

# add plugin config to _config.yml

hexo g
```
- update README.md
  - delete the section of **Starter Guide**
  - update **Usages**
- commit and push to a remote repository
- npm publish
- following the [guide]( https://hexo.io/docs/plugins#Publishing) publish to https://hexo.io/plugins/

## License
Copyright (c) 2019 dailyrandomphoto. Licensed under the [MIT license][license-url].

[npm-url]: https://www.npmjs.com/package/hexo-plugin-starter
[travis-url]: https://travis-ci.org/dailyrandomphoto/hexo-plugin-starter
[coveralls-url]: https://coveralls.io/github/dailyrandomphoto/hexo-plugin-starter?branch=master
[license-url]: LICENSE
[dependencies-url]: https://david-dm.org/dailyrandomphoto/hexo-plugin-starter
[devDependencies-url]: https://david-dm.org/dailyrandomphoto/hexo-plugin-starter?type=dev

[npm-downloads-image]: https://img.shields.io/npm/dm/hexo-plugin-starter
[npm-version-image]: https://img.shields.io/npm/v/hexo-plugin-starter
[license-image]: https://img.shields.io/npm/l/hexo-plugin-starter
[travis-image]: https://img.shields.io/travis/dailyrandomphoto/hexo-plugin-starter
[coveralls-image]: https://img.shields.io/coveralls/github/dailyrandomphoto/hexo-plugin-starter
[dependencies-image]: https://img.shields.io/david/dailyrandomphoto/hexo-plugin-starter
[devDependencies-image]: https://img.shields.io/david/dev/dailyrandomphoto/hexo-plugin-starter
