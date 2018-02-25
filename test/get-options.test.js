const { join } = require('path')
const getOptions = require('../lib/get-options')

describe('Options', () => {
  it('should return the default options with expanded paths', () => {
    const srcDir = __dirname
    const rootDir = __dirname
    const options = getOptions({ srcDir, rootDir }, {})

    expect(options.srcGlobs).toEqual([
      join(__dirname, 'layouts/**/*.vue'),
      join(__dirname, 'pages/**/*.vue'),
      join(__dirname, 'components/**/*.vue')
    ])

    expect(options.variablesPath).toBe(
      join(__dirname, 'assets/sass/variables.sass')
    )

    expect(options.sassTempPath.includes('nuxt-bulma-slim.sass')).toBe(true)
    expect(options.cssTempPath.includes('nuxt-bulma-slim.css')).toBe(true)
    expect(options.disablePostCSSWarnings).toBe(true)
    expect(options.whitelist).toEqual([])
    expect(options.whitelistPatterns).toEqual([])
    expect(options.additionalPaths).toEqual([])
  })
})