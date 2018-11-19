/* globals __dirname */
const cors = require('cors');
const express = require('express');
const path = require('path');

const app = express();

app.use(cors());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true
  })
);
console.log(__dirname);
app.use(express.static(path.join(__dirname, '/dist/ng-rock-paper-scissors')));

const normalizePort = val => {
  const port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
};

app.use(function(req, res, next) {
  res.sendFile(path.join(__dirname, `/dist/ng-rock-paper-scissors/index.html`));
});

const port = normalizePort(process.env.PORT || '3001');
app.listen(port);

module.exports = app;
