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
  const tokenLifeTime = 2 * 60 * 60 * 1000;

  const token = jwt.sign({ _id: user._id }, jwtKey);
  res.header('auth', token).json({ email });
  user.resetToken = token;
  user.resetTokenExpiration = Date.now() + tokenLifeTime;

  if (!user) return res.status(400).json({ error: 'Invalid email' });
  else {
    const items = reset.reset(user.email, token);
    await sendWelcomeEmail(user.email, items.subject, items.text, items.html, token);
    user.save();
  }
});

router.post('/create', async (req, res) => {
  const { ResetToken } = req.query;
  if (!ResetToken) return res.status(401).json({ error: 'No token' });
  const testAccount = User.findOne({ resetToken: ResetToken, resetTokenExpiration: { $gt: Date.now() } });

  if (testAccount) {
    const user = jwt.verify(ResetToken, jwtKey);
    const { _id } = user;

    if (_id) {
      const salt = await bcrypt.genSalt(10);
      const password = await bcrypt.hash(req.query.password, salt);
      await User.findOneAndUpdate({ _id: user._id }, { $set: { password } }, { new: true });
      return res.json({ user });
    }
  }
  res.status(400).json({ error: 'Invalid token' });
});
module.exports = router;
