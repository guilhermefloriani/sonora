var express = require('express');
var webpack = require('webpack');
var config = require('./webpack.config');

var compiler = webpack(config);
var app = express();
app.use(require('cors')());

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler, {
  noInfo: true
}));

app.listen(4001, 'localhost', function (err) {
  if (err) return console.error(err);
  console.log('Webpack dev server running on localhost:4001');
  console.log('bundling js ...');
});

// Exit on end of STDIN
process.stdin.resume();
process.stdin.on('end', function () {
  process.exit(0);
});
