const { Category } = require('../model/category');
const express = require('express');

const router = express.Router();

router.post('/', async (req, res) => {
  //1.Zidentyfikować usera, którego instancja została stworzona w auth
  //2. Stwrzyc instancję modelu category, powiazaną z zidentyfikowanym użytkownikiem
  //3. Zapisac do bazy danych
  const currentUser = req.user;
  const { _id } = currentUser;

  const folder = new Category({
    // name: req.body.name,
    // images: req.body.images,
    ...req.body,
    user: _id,
  });

    await folder.save();
    res.status(200).send(folder);

});

module.exports = router;
