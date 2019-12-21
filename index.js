const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
// const sequelize = require('sequelize');


// require('./db');
require('dotenv').config();

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// routers
app.use(require('./routes'));

// var models = require('./models');
// models.sequelize.sync().then(function(){
//   console.log("nicde! db good!!!!");
// }).catch(function(err){
//   console.log("update db error!!!");
// });

// Serve static assets from the /public folder
app.use('/public', express.static(path.join(__dirname, 'public')));
app.use('/doc', express.static(path.join(__dirname, 'doc')));

const port = process.env.PORT || 1337;
const httpServer = require('http').createServer(app);

// sequelize.sync();

httpServer.listen(port, function () {
  console.log('Server is running in port ' + port + '.');
});
