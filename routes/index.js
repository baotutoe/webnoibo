let express = require('express');
let router = express.Router();
let mid = require('../middlewares');

let trangchuRouter = require('./trangchu.route');
let gioithieuRouter = require('./gioithieu.route');
let dangnhapRouter = require('./dangnhap.route');
let dangkytkRouter = require('./dangkytk.route');
let dangkyyeucauRouter = require('./dangkyyeucau.route');
let thaytroRouter = require('./thaytro.route');
let dangxuatRouter = require('./dangxuat.route');
let ketnoidammeRouter = require('./ketnoidamme.route');
let khoanhkhacdangnhoRouter = require('./khoanhkhacdangnho.route');
let taikhoanRouter = require('./taikhoan.route');
let dangkylichhenRouter = require('./dangkylichhen.route');
let lichhenRouter = require('./lichhen.route');
let chitietketnoidammeRouter = require('./chitietketnoidamme.route');

// public
router.use('/dangxuat', dangxuatRouter)

// skip if loggedIn
router.use('/dang-nhap', mid.loggedOut, dangnhapRouter)
router.use('/dangky-t-k', mid.loggedOut, dangkytkRouter)

// private
router.use('/', trangchuRouter)
router.use('/gioithieu', mid.requiresLogin, gioithieuRouter)
router.use('/dangkyyeucau', mid.requiresLogin, dangkyyeucauRouter)
router.use('/thaytro', mid.requiresLogin, thaytroRouter)
router.use('/ketnoidamme', mid.requiresLogin, ketnoidammeRouter)
router.use('/khoanhkhacdangnho', mid.requiresLogin, khoanhkhacdangnhoRouter)
router.use('/taikhoan', mid.requiresLogin, taikhoanRouter)
router.use('/dangkylichhen', mid.requiresLogin, dangkylichhenRouter)
router.use('/lichhen', mid.requiresLogin, lichhenRouter)
router.use('/chitietketnoidamme', mid.requiresLogin, chitietketnoidammeRouter)
router.use('/chitietthaytro', mid.requiresLogin, thaytroRouter)
router.use('/chitietlichhen', mid.requiresLogin, lichhenRouter)
router.use('/kkdn', mid.requiresLogin, taikhoanRouter)
router.use('/lh', mid.requiresLogin, taikhoanRouter)
router.use('/tt', mid.requiresLogin, taikhoanRouter)
router.use('/cmt', mid.requiresLogin, chitietketnoidammeRouter)
router.use('/pq', mid.requiresLogin, taikhoanRouter)



module.exports = router;