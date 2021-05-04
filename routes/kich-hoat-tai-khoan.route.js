var express = require('express');

var controller = require('../controllers/kich-hoat-tai-khoan.controller');

var router = express.Router();

router.get('/', controller.index);

module.exports = router;