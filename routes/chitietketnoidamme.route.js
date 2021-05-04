var express = require('express');

var controller = require('../controllers/chitietketnoidamme.controller');

var router = express.Router();

router.get('/:id', controller.index)
router.post('/ctdm', controller.cmt)



module.exports = router;