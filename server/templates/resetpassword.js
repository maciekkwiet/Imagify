const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const router = express.Router();

const reset = require('../templates/emailitems');
const { User } = require('../model/user');
const { sendEmail } = require('../templates/email');

const jwtKey = process.env.JWT_SECRET2;

router.post('/reset', async (req, res) => {
  const { email } = req.query;
  const user = await User.findOne({ email });
  if (!user) return res.status(400).json({ error: 'Invalid email' });
  else {
    const tokenLifeTime = 2 * 60 * 60 * 1000;
    const token = jwt.sign({ _id: user._id }, jwtKey);
    user.resetToken = token;
    user.resetTokenExpiration = Date.now() + tokenLifeTime;
    user.save();
    const items = reset.reset(user.email, user.resetToken);
    await sendEmail(user.email, items.subject, items.text, items.html, user.resetToken);
  }
});

router.post('/create', async (req, res) => {
  const { resetToken } = req.params;
  console.log(resetToken);
  if (!resetToken) return res.status(401).json({ error: 'No token' });

  try {
    const user = jwt.verify(resetToken, jwtKey);
    const { _id } = user;

    if (_id) {
      const salt = await bcrypt.genSalt(10);
      const password = await bcrypt.hash(req.query.password, salt);
      // user.finOne({ resetToken: resetToken, resetTokenExpiration: { $gt: Date.now() } });
      await User.findOneAndUpdate({ _id: user._id }, { $set: { password } }, { new: true });
      return res.json({ user });
    }
  } catch (ex) {
    res.status(400).json({ error: 'Invalid token' });
  }
});
module.exports = router;
