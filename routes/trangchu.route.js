let express = require('express');
let router = express.Router();
let mid = require('../middlewares')
let controller = require('../controllers/trangchu.controller');

router.get('/', mid.requiresLogin, controller.index);

module.exports = router;