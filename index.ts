import Plugin = require('amma-plugin-loader');
let pkg = require('./package.json');
let PluginLoader = Plugin.default;
let config: Plugin.IConfig = {
  services: {
    'dbParser': require('./services/db.parser').default,
  },
  routes: [],
  attributes: {
    pkg: pkg
  }
};
let plugin: Plugin.IPluginLoader = new PluginLoader(config);
export = plugin;
