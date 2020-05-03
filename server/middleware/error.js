module.exports = function (err, req, res, next) {
  console.log('err');
  console.log(err);
  res.status(500).json({ error: 'Something failed' });
};
