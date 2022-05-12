const packageJson = require('./package.json');

module.exports = {
  presets: [['@babel/preset-env', { modules: 'auto' }], '@babel/preset-typescript'],
  plugins: [
    ['replace-ts-export-assignment'],
    ['@babel/transform-runtime'],
    [
      'transform-define',
      {
        PACKAGE_NAME: packageJson.name,
        PACKAGE_VERSION: packageJson.version,
        PACKAGE_DESCRIPTION: packageJson.description,
        PACKAGE_HOMEPAGE: packageJson.homepage,
      },
    ],
  ],
};
