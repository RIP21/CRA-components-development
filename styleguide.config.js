/* eslint-disable import/no-dynamic-require,no-shadow,import/no-extraneous-dependencies */

process.env.NODE_ENV = process.env.NODE_ENV || 'development'

const paths = require('react-app-rewired/scripts/utils/paths')

require(`${paths.scriptVersion}/config/env`)

const webpackConfig = `${paths.scriptVersion}/config/webpack.config.dev`
const config = require(webpackConfig)
const override = require(paths.configOverrides)
const overrideFn =
  typeof override === 'function'
    ? override
    : override.webpack || ((config, env) => config)

module.exports = {
  webpackConfig: overrideFn(config, process.env.NODE_ENV),
  require: ['normalize.css/normalize.css'],
  compilerConfig: {
    transforms: { dangerousTaggedTemplateString: true }, // This to support styled-components in example Markdowns
  },
}
