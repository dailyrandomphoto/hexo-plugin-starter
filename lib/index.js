'use strict';

const chalk = require('chalk'); // eslint-disable-line node/no-missing-require,node/no-extraneous-require

const moduleName = require('../package.json').name;
// TODO: change moduleConfigKey
const moduleConfigKey = 'your_plugin_name';

function init(hexo) {
  const { config, log, extend } = hexo;
  const { filter, tag, helper } = extend;
  const moduleConfig = Object.assign({
    enable: false,
    foo: 'bar'
  }, config[moduleConfigKey]);

  if (!moduleConfig.enable) {
    return;
  }

  log.debug('=========== %s ===========', chalk.cyan(moduleName));
  log.debug('config %s', chalk.magenta(JSON.stringify(moduleConfig)));

  // TODO: choose what do you want to make, filter, tag, helper or others

  // TODO: change filter type
  filter.register('before_post_render', require('./filter.js')(hexo));

  // TODO: change tag name, and config as async or sync
  tag.register('your_tag_name', require('./tag.js')(hexo), {async: true});

  // Helper API - https://hexo.io/api/helper
  helper.register('js', function(path) {
    return '<script src="' + path + '"></script>';
  });

  // Generator API - https://hexo.io/api/generator
  // generator.register(name, function(locals){
  //   // ...
  // });

  // More: https://hexo.io/api/
}

module.exports = init;

// execute from hexo plugin loader
if (typeof hexo !== 'undefined') {
  init(hexo);
}
