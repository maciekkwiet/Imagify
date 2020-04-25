require('dotenv').config();
require('express-async-errors');
const mongoose = require('mongoose');
const express = require('express');
const api = express();

const router = require('./routes');
const me = require('./routes/me');
const error = require('./middleware/error');

const port = process.env.PORT || 12345;
api.use(express.json());

const dbKey = process.env.DB_KEY;
mongoose
  .connect(dbKey, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connecting with Data Base is ok'))
  .catch(() => console.error('Error with Data Base'));

api.use('/app', router); //na endpoint api dzieje się to co jest w router
router.use('/me', me);
api.use(error);
api.listen(port, () => console.log(`Listening on port ${port}`));
