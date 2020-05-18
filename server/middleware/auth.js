const jwt = require('jsonwebtoken');
const jwtKey = process.env.JWT_SECRET;
const { User } = require('../model/user');

module.exports = async function (req, res, next) {
  const token = req.cookies.auth || req.header('x-auth');
  console.log('token', token);
  console.log(req.headers);
  if (!token) return res.status(401).json({ error: 'No token' });

  try {
    const decodedUser = jwt.verify(token, jwtKey);
    //otrzymujemy id i czas życia tokena

    const { _id } = decodedUser;
    if (_id) {
      const user = await User.findOne({ _id });
      req.user = user;
      next();
    } else {
      res.json({ error: 'This user not exist' });
    }
  } catch (ex) {
    res.status(400).json({ error: 'Invalid token' });
  }
};
