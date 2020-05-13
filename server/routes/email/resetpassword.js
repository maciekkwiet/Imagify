const express = require('express');
const router = express.Router();
const { User } = require('../../model/user');
const bcrypt = require('bcrypt');
const { sendWelcomeEmail } = require('./email');
const reset = require('./emailitems');
const jwt = require('jsonwebtoken');
const jwtKey = process.env.JWT_SECRET;

router.post('/reset', async (req, res) => {
  const { email } = req.query;
  let user = await User.findOne({ email });

  const token = jwt.sign({ _id: user._id }, jwtKey);
  res.header('auth', token).json({ email });

  if (!user) return res.status(400).json({ error: 'Invalid email' });
  else {
    const items = reset.reset(user.email, token);
    await sendWelcomeEmail(user.email, items.subject, items.text, items.html, token);

    user.save();
  }

  res.render('/passwordcreate/' + token);
  return token;
});

router.post('/create', async (req, res) => {
  const { email } = req.query;
  let user = await User.findOne({ email });
  if (!user) return res.status(400).json({ error: 'Invalid email' });
  else {
    const salt = await bcrypt.genSalt(10);
    // const password = await bcrypt.hash(req.body.password, salt);
    const password = await bcrypt.hash(req.query.password, salt);
    // const { password } = req.query;
    await User.findOneAndUpdate({ email: email }, { $set: { password: password } }, { new: true }, function (err, doc) {
      if (err) {
        console.log('Something wrong when updating data!');
      }
      console.log(doc);
      res.json(doc);
    });
    // await user.save();
  }
});

module.exports = router;
