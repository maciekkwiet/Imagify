const jwt = require('jsonwebtoken');
const jwtKey = process.env.JWT_SECRET;

module.exports = function (req, res, next) {
  const token = req.header('auth');
  if (!token) return res.status(401).json({error : 'No token'});

  try {
    const decodedUser = jwt.verify(token, jwtKey);
    req.user = decodedUser;
    next();
  } catch (ex) {
    res.status(400).json({error:'Invalid token'});
  }
};
