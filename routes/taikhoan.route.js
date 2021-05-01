var express = require('express');

var controller = require('../controllers/taikhoan.controller');

var router = express.Router();

router.get('/', controller.index)
router.get('/adminkkdn', controller.indexkkdn)
router.get('/adminlh', controller.indexlh)
router.post('/',controller.update)
router.get('/delete/:id',controller.delete)
router.get('/deletekkdn/:id',controller.deletekkdn)
router.get('/deletelh/:id',controller.deletelh)





module.exports = router;