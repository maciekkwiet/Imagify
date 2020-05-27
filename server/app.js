require('dotenv').config();
require('express-async-errors');

const path = require('path');
const mongoose = require('mongoose');
const express = require('express');
const passport = require('passport');
const cookieParser = require('cookie-parser');

const app = express();

const initializeFacebookStrategy = require('./config/passport-facebook');
const router = require('./routes');

const port = process.env.PORT || 12345;

const dbKey = process.env.DB_KEY;

mongoose
  .connect(dbKey, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connecting with Data Base is ok'))
  .catch(() => console.error('Error with Data Base'));

app.use(express.static(__dirname + '/public/resetpassword'));

app.get('/passwordreset', (req, res) => {
  const fileName = path.join(__dirname, 'public/resetpassword/resetpassword.html');
  res.sendFile(fileName);
});

app.get('/passwordcreate/:resetToken', (req, res) => {
  const fileName = path.join(__dirname, 'public/resetpassword/createpassword.html');
  res.sendFile(fileName);
});

// app.use('/api', router);
// app.use(error);
app.use(passport.initialize()); // inicjalizacja passporta
initializeFacebookStrategy(passport);

const publicPath = path.join(__dirname, '../', '/client', '/public');

app.use(express.static(publicPath));
app.use(express.json({ limit: '50mb' }));
app.use(cookieParser());

app.use('/api', router); //na endpoint api dzieje się to co jest w router

app.get('/', function (req, res) {
  const indexPath = path.join(publicPath, 'index.html');
  res.sendFile(indexPath);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
