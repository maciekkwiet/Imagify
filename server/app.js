require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');

const router = require('./routes');

const app = express();
const port = process.env.PORT || 12345;

app.use(express.json());

const dbKey = process.env.DB_KEY;
mongoose
  .connect(dbKey, { useNewUrlParser: true })
  .then(() => console.log('Connecting with Data Base is ok'))
  .catch((err) => console.error('Error with Data Base'));

app.use('/api', router);

app.listen(port, () => console.log(`Listening on port ${port}`));

app.get('/sciezka', (req, res) => {
  res.send('Hello Word');
});

// const router = express.Router();
// router.get('/login', (req, res) => {
//   res.send('login');
// });
// router.post('/login', (req, res) => {
//   res.send('login post');
// });

// const router2 = express.Router();
// router2.use('/foo', router);
// app.use('/api', router2);
