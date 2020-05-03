const jwt = require('jsonwebtoken');
const jwtKey = process.env.JWT_SECRET;
const { User } = require('../model/user');

module.exports = async function (req, res, next) {
  const token = req.header('x-auth');

  if (!token) return res.status(401).json({ error: 'No token' });

  try {
    const decodedUser = jwt.verify(token, jwtKey);
    //otrzymujemy id i czas życia tokena
    req.user = decodedUser;

    const { _id } = req.user;
    const user = await User.findOne({ _id });
    req.user = user;
    next();
  } catch (ex) {
    res.status(400).json({ error: 'Invalid token' });
  }
};
