/* eslint-disable import/no-extraneous-dependencies */

const rewireEslint = require('./rewires/eslint')
const rewireSc = require('react-app-rewire-styled-components')
const rewirePolished = require('react-app-rewire-polished')
const rewireResolve = require('./rewires/resolve')

module.exports = function override(config, env) {
  rewireResolve(config)
  rewireEslint(config)
  rewireSc(config, env, {
    displayName: true,
  }),
    rewirePolished(config)
  return config
}
