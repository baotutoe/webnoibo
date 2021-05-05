var express = require('express');

var controller = require('../controllers/taikhoanhs.controller');

var router = express.Router();

router.get('/', controller.index)
router.get('/hskkdn', controller.indexkkdn)
router.get('/hslh', controller.indexlh)
router.get('/hstt', controller.indextt)


router.post('/',controller.update)
router.post('/kkdn',controller.updatekkdn)
router.post('/lh',controller.updatelh)
router.post('/tt',controller.updatett)



router.get('/delete/:id',controller.delete)
router.get('/deletekkdn/:id',controller.deletekkdn)
router.get('/deletelh/:id',controller.deletelh)
router.get('/deletett/:id',controller.deletett)







module.exports = router;