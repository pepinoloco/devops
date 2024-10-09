const converter = require('../src/converter')
const express = require('express')

const port = 8888;
const app = express();
const appname = 'RGB/HEX Converter API Server';

app.get('/', function (req, res) {
  res.send(`${appname} is running...\n`);
});

app.get('/rgbToHex', function (req, res) {
  const red = parseInt(req.query.red, 10);
  const green = parseInt(req.query.green, 10);
  const blue = parseInt(req.query.blue, 10);
  const hex = converter.rgbToHex(red, green, blue);
  res.send(hex);
});

app.get('/hexToRgb', function (req, res) {
  const hex = req.query.hex;
  const rgb = converter.hexToRgb(hex);
  res.send(JSON.stringify(rgb));
});

const server = app.listen(port, () => {
  console.log(`${appname} is listening at http://localhost:${port}`);
});
