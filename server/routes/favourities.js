const express = require('express');
const router = express.Router();

// const { user } = require('../middleware/auth');1e
// const { User } = require('../model/user');

// router.get('/', async (req, res) => {

//   const { _id } = req.user;
//   let user = await User.findOne({ _id });
//   const { favourities } = req.user;
//   res.send({ favourities });

// });

// router.post('/:url', async (req, res) => {
//   const { url } = req.params;
//   const { favourities } = req.user;

//   if (!favourities.includes(url)) {
//     favourities.push(url);
//     req.user.save();
//   }
//   res.json({ favourities });
// });

// router.delete('/:url', async (req, res) => {
//   const { url } = req.params;
// <<<<<<< HEAD
//   const { _id } = req.user;
//   let user = await User.findOne({ _id });
//   const { favourities } = user;
//   const newarray = favourities.filter((el) => el !== url);
//   req.user.save();
//   res.json({ favourities: newarray });
// =======
//   let { favourities } = req.user;
//   favourities = favourities.filter((el) => el !== url);
//   await User.findOneAndUpdate({ _id: req.user._id }, { $set: { favourities } }, { new: true });
//   res.json({ favourities });
// >>>>>>> 7f1175e1987a8761d201c49dc357515d27b7151e
// });

module.exports = router;
