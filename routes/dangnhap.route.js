let express = require('express');
let router = express.Router();
let mid = require('../middlewares');

let controller = require('../controllers/dangnhap.controller');

router.get('/', mid.loggedOut, controller.index);
router.post('/', controller.check);

module.exports = router;