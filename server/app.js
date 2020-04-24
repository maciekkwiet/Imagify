require('dotenv').config();
require('express-async-errors')
const mongoose = require('mongoose');
const express = require('express');
const error = require('./middleware/error')

const router = require('./routes');

const app = express();
const port = process.env.PORT || 12345;

app.use(express.json());
app.use(error);

const dbKey = process.env.DB_KEY;
mongoose.connect(dbKey, { useNewUrlParser: true })
  .then(() => console.log('Connecting with Data Base is ok'))
  .catch((err) => console.error('Error with Data Base'));

app.use('/app',router);//na endpoint api dzieje się to co jest w router



app.listen(port, () => console.log(`Listening on port ${port}`));
