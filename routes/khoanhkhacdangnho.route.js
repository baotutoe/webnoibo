var express = require('express');

var controller = require('../controllers/khoanhkhacdangnho.controller');

var router = express.Router();

router.get('/', controller.index);

module.exports = router;