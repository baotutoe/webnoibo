var express = require('express');

var controller = require('../controllers/taikhoangv.controller');

var router = express.Router();


router.get('/', controller.index)
router.post('/',controller.update)
router.get('/:id',controller.delete)







module.exports = router;