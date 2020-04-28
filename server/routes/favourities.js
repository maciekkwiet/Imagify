const { User } = require('../model/user');
const router = express.Router();
const favouritiesTab = User.favourities;
const url = require('url')

router.get('/', async (req, res) =>
{
    

    console.log(url);
}