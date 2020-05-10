const express = require('express');
const router = express.Router();
const { User } = require('../../model/user');
const bcrypt = require('bcrypt');
const { sendWelcomeEmail } = require('./email');

const reset = require('./emailitems');

router.post('/reset/:email', async (req, res) => {
 

  const { email } = req.params;
  // res.send(email);
  let user = await User.findOne({ email });

  if (!user) return res.status(400).json({ error: 'Invalid email' });
  else {
    const items = reset.reset(user.email);
    await sendWelcomeEmail(user.email, items.subject, items.text, items.html);
    // console.log('test');
  }
  // console.log(user.password);
  res.send(user);
});

router.post('/create/:email', async (req, res) => {
  const { email } = req.params;
  let user = await User.findOne({ email });
  if (!user) return res.status(400).json({ error: 'Invalid email' });
  else {
    const salt = await bcrypt.genSalt(10);
    const newpassword = await bcrypt.hash(req.body.password, salt);
    console.log(User);
    await User.findOneAndUpdate({ email: email }, { $set: { password: newpassword } }, { new: true }, function (
      err,
      doc,
    ) {
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
