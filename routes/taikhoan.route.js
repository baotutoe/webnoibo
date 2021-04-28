var express = require('express');

var controller = require('../controllers/taikhoan.controller');

var router = express.Router();

router.get('/', controller.index);
router.post('/',controller.update);


module.exports = router;