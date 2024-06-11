const PRESET_REACT = '@babel/preset-react'
const PRESET_ENV = '@babel/preset-env'

const configTesting = {
  plugins: [],
  presets: [
    [PRESET_REACT],
    [PRESET_ENV, { modules: 'commonjs' }]
  ]
}

const configNotTesting = {
  plugins: [],
  presets: [
    [PRESET_REACT],
    [PRESET_ENV, { targets: { chrome: '125' } }]
  ]
}

module.exports = {
  env: {
    test: configTesting,
    testing: configTesting,
    development: configNotTesting,
    production: configNotTesting,
  }
}
