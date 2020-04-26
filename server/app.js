require('dotenv').config();
require('express-async-errors');
const mongoose = require('mongoose');
const express = require('express');
// const passport = require('passport');
const app = express();

const router = require('./routes');
const me = require('./routes/me');
const error = require('./middleware/error');

const port = process.env.PORT || 12345;

const dbKey = process.env.DB_KEY;
mongoose
  .connect(dbKey, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connecting with Data Base is ok'))
  .catch(() => console.error('Error with Data Base'));

app.use(express.json()); 
app.use('/api', router); //na endpoint api dzieje się to co jest w router
router.use('/me', me);
app.use(error);

// przekierowanie do facebooka
app.get('/auth/facebook', passport.authenticate('facebook'));

// przekierowanie do naszego endpointu, gdy użytkownik dostanie token w przeciwnym wypadku uwieżytelnienie nie nastapi

app.get('/auth/facebook/callback',passport.authenticate('facebook', { successRedirect: '/',failureRedirect: '/login' }));

app.listen(port, () => console.log(`Listening on port ${port}`));
