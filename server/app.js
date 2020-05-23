require('dotenv').config();
require('express-async-errors');
const mongoose = require('mongoose');
const express = require('express');
const app = express();
const path = require('path');

const router = require('./routes');
const error = require('./middleware/error');

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

app.use(express.json());
app.use('/api', router);
app.use(error);
app.listen(port, () => console.log(`Listening on port ${port}`));
