const jwt = require('jsonwebtoken');
const jwtKey = process.env.JWT_SECRET;
const { User } = require('../model/user');

module.exports = async function (req, res, next) {
  const token = req.cookies.auth || req.header('auth');
  if (!token) return res.status(401).json({ error: 'No token' });

  try {
    const decodedUser = jwt.verify(token, jwtKey);
    //otrzymujemy id i czas życia tokena
    const { _id } = decodedUser;
    if (!_id) throw 'Token does not have id';

    const user = await User.findOne({ _id });
    if (!user) return res.json({ error: 'This user does not exist' });

    req.user = user;
    next();
  } catch (ex) {
    return res.status(400).json({ error: 'Invalid token' });
  }
};
