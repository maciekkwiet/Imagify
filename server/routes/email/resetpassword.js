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
  user.resetToken = token;
  user.resetTokenExpiration = Date.now() + 4000000;
  if (!user) return res.status(400).json({ error: 'Invalid email' });
  else {
    const items = reset.reset(user.email, token);
    await sendWelcomeEmail(user.email, items.subject, items.text, items.html, token);
    user.save();
  }
});

router.post('/create', async (req, res) => {
  const { resetToken } = req.query;
  if (!resetToken) return res.status(401).json({ error: 'No token' });

  try {
    const user = jwt.verify(resetToken, jwtKey);
    const { _id } = user;

    if (_id) {
      const salt = await bcrypt.genSalt(10);
      const password = await bcrypt.hash(req.query.newpassword, salt);
      // user.finOne({resetToken: resetToken,resetTokenExpiration:{$gt: Date.now()}});
      await User.findOneAndUpdate({ _id: req.user._id }, { $set: { password } }, { new: true }, function (err, doc) {
        if (err) {
          console.log('Something wrong when updating data!');
        }
        console.log(doc);
        res.json(doc);
      });

      await user.save();
    }
  } 
  catch (ex) {
    res.status(400).json({ error: 'Invalid token' });
  }
});
module.exports = router;
