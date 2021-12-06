const { CracoAliasPlugin, configPaths } = require('react-app-rewire-alias');

module.exports = {
  plugins: [{
    plugin: CracoAliasPlugin,
    source: 'tsconfig',
    options: { alias: configPaths('./tsconfig.paths.json') },
  }],
};
