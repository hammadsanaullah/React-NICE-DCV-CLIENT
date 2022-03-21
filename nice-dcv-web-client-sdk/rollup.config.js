import alias from '@rollup/plugin-alias';

module.exports = {
  input: './src/index.js',
  output: {
    dir: 'output',
    format: 'cjs'
  },
  plugins: [
    alias({
      dcv: __dirname + '/nice-dcv-web-client-sdk/dcvjs-esm'
    })
  ]
};