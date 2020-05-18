const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const router = express.Router();

const reset = require('./emailitems');
const { User } = require('../../model/user');
const { sendWelcomeEmail } = require('./email');

const jwtKey = process.env.JWT_SECRET2;

router.post('/reset', async (req, res) => {
  const { email } = req.query;
  const user = await User.findOne({ email });

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
  // console.log(resetToken);
  // console.log(password);
  if (!resetToken) return res.status(401).json({ error: 'No token' });

  try {
    const user = jwt.verify(resetToken, jwtKey);
    const { _id } = user;
    console.log('ID' + _id);

    if (_id) {
      const salt = await bcrypt.genSalt(10);
      const password = await bcrypt.hash(req.query.password, salt);
      // user.finOne({ resetToken: resetToken, resetTokenExpiration: { $gt: Date.now() } });
      await User.findOneAndUpdate({ _id: user._id }, { $set: { password } }, { new: true });
      // console.log(doc);
      return res.json({ user });
    }
  } catch (ex) {
    console.log(ex);
    res.status(400).json({ error: 'Invalid token' });
  }
});
module.exports = router;
