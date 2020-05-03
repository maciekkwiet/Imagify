require('dotenv').config();
require('express-async-errors');

const mongoose = require('mongoose');
const express = require('express');
const passport = require('passport');
const cookieParser = require('cookie-parser');

const initializeFacebookStrategy = require('./config/passport-facebook');
const router = require('./routes');
const error = require('./middleware/error');

const app = express();

const port = process.env.PORT || 12345;

const dbKey = process.env.DB_KEY;
mongoose
  .connect(dbKey, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connecting with Data Base is ok'))
  .catch(() => console.error('Error with Data Base'));

app.use(passport.initialize()); // inicjalizacja passporta
initializeFacebookStrategy(passport);

app.use(express.json());
app.use(cookieParser());
app.use('/api', router); //na endpoint api dzieje się to co jest w router
app.use(error);

app.get('/', function (req, res) {
  res.send('Dziala');
});

app.listen(port, () => console.log(`Listening on port ${port}`));
