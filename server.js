const express = require('express');
const favicon = require('express-favicon');
const path = require('path');
const port = process.env.PORT || 8080;
const app = express();
const dbConfig = require('./server/config/dbConfig');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

app
  .use(favicon(__dirname + '/build/favicon.ico'))
  .use(express.static(__dirname))
  .use(express.static(path.join(__dirname, 'build')))
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: false }));

//router
var user = require('./server/routers/userRouter');
app.use('/api/user', user);

app.get('/ping', function (req, res) {
  return res.send('pong');
});

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port, function () {
  console.log('Your node js server is running in port ', port);
});

mongoose.connect(process.env.MONGODB_URI || dbConfig.url, {
  useNewUrlParser: true
}).then(() => {
  console.log("Successfully connected to the database");
}).catch(err => {
  console.log('Could not connect to the database. Exiting now...', err);
  process.exit();
});



