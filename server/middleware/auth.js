const jwt = require('jsonwebtoken');
const jwtKey = process.env.JWT_SECRET;
const { User } = require('../model/user');

module.exports = function (req, res, next) {
  const token = req.header('x-auth');
  if (!token) return res.status(401).json({ error: 'No token' });

  try {
    const decodedUser = jwt.verify(token, jwtKey);
    req.user = decodedUser;
    const { _id } = req.user;
    let user = User.findOne({ _id });
    next(user);
  } catch (ex) {
    console.log(ex);
    res.status(400).json({ error: 'Invalid token' });
  }
};
