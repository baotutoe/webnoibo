var express = require('express');

var controller = require('../controllers/ketnoidamme.controller');

var router = express.Router();

router.get('/', controller.index);
router.post('/', controller.sendmail);

module.exports = router;