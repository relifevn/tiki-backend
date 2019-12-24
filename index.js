const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

require('./db');

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// routers
// app.use(require('./routes'));

// Serve static assets from the /public folder
app.use('/public', express.static(path.join(__dirname, 'public')));
app.use('/.well-known', express.static(path.join(__dirname, 'public')));
app.use('/doc', express.static(path.join(__dirname, 'doc')));

const port = process.env.PORT || 1337;
const httpServer = require('http').createServer(app);

httpServer.listen(port, function () {
  console.log('Server is running in port ' + port + '.');
});