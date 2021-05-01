let express = require('express');
let router = express.Router();
let controller = require('../controllers/trangchu.controller');

router.get('/', controller.index);

module.exports = router;