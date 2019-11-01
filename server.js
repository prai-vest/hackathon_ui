const express = require('express')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const path = require('path')
const config = require('./webpack.config.js')

const app = express()
const compiler = webpack(config)

// Tell express to use the webpack-dev-middleware and use the webpack.config.js
// configuration file as a base.
const middleWare = webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath,
  historyApiFallback: true,
})
app.use(middleWare);

// hot module replacement
app.use(require('webpack-hot-middleware')(compiler))

app.get('*', (req, res) => {
  res.write(
    middleWare.fileSystem.readFileSync(
      path.join(config.output.path, 'index.html'),
    ),
  )
  res.end()
})

// Serve the files on port 3000.
app.listen(3002, () => {
  console.log('Example app listening on port 3002!\n')
})
