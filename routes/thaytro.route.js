var express = require('express');

var controller = require('../controllers/thaytro.controller');

var router = express.Router();

router.get('/', controller.index);
router.get('/:id', controller.chitiet)



module.exports = router;