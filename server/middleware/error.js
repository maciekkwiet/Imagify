module.exports = function (err, req, res) {
    console.log(err);
    res.status(500).json( {error : 'Something failed'} );
  };
  