var express = require('express');

var controller = require('../controllers/taikhoan.controller');

var router = express.Router();

router.get('/', controller.index)
router.get('/adminkkdn', controller.indexkkdn)
router.get('/adminlh', controller.indexlh)
router.get('/admintt', controller.indextt)
router.get('/adminpq', controller.indexpq)


router.post('/',controller.update)
router.post('/kkdn',controller.updatekkdn)
router.post('/lh',controller.updatelh)
router.post('/tt',controller.updatett)
router.post('/pq',controller.updatepq)



router.get('/delete/:id',controller.delete)
router.get('/deletekkdn/:id',controller.deletekkdn)
router.get('/deletelh/:id',controller.deletelh)
router.get('/deletett/:id',controller.deletett)
router.get('/deletepq/:id',controller.deletepq)







module.exports = router;