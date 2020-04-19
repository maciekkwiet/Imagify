const mongoose = require("mongoose");
const express = require("express");
const port = process.env.PORT || 12345;
const app = express();
const User = require("./model/user");
app.use(express.json());
require('dotenv').config()

app.use('./model/user',User)
app.listen(port, () => console.log(`Listening on port ${port}`));
const dbKey=process.env.DB_KEY
mongoose.connect(dbKey,{useNewUrlParser: true,})
.then(()=>console.log('Connecting with Data Base is ok'))
.catch((err=>console.error('Error with Data Base')))



app.get('/', (req, res) =>
{
res.send("Hello Word");
})






