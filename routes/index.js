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
let taikhoanhsRouter = require('./taikhoanhs.route');
let taikhoangvRouter = require('./taikhoangv.route');

let dangkylichhenRouter = require('./dangkylichhen.route');
let lichhenRouter = require('./lichhen.route');
let chitietketnoidammeRouter = require('./chitietketnoidamme.route');
let kichhoattaikhoanRouter = require('./kich-hoat-tai-khoan.route');

// public
router.use('/dangxuat', dangxuatRouter)

// skip if loggedIn
router.use('/dang-nhap', mid.loggedOut, dangnhapRouter)
router.use('/dangky-t-k', mid.loggedOut, dangkytkRouter)

// private
router.use('/', trangchuRouter)
router.use('/gioithieu', [mid.requiresLogin, mid.requiresActive], gioithieuRouter)
router.use('/dangkyyeucau', [mid.requiresLogin, mid.requiresActive], dangkyyeucauRouter)
router.use('/thaytro', [mid.requiresLogin, mid.requiresActive], thaytroRouter)
router.use('/ketnoidamme', [mid.requiresLogin, mid.requiresActive], ketnoidammeRouter)
router.use('/khoanhkhacdangnho', [mid.requiresLogin, mid.requiresActive], khoanhkhacdangnhoRouter)

router.use('/taikhoan', [mid.requiresLogin, mid.requiresActive, mid.requiresAdmin], taikhoanRouter)
router.use('/taikhoangv', [mid.requiresLogin, mid.requiresActive, mid.requiresTeacher], taikhoangvRouter)
router.use('/taikhoanhs', [mid.requiresLogin, mid.requiresActive, mid.requiresStudent], taikhoanhsRouter)

router.use('/dangkylichhen', [mid.requiresLogin, mid.requiresActive], dangkylichhenRouter)
router.use('/lichhen', [mid.requiresLogin, mid.requiresActive], lichhenRouter)
router.use('/chitietketnoidamme', [mid.requiresLogin, mid.requiresActive], chitietketnoidammeRouter)
router.use('/chitietthaytro', [mid.requiresLogin, mid.requiresActive], thaytroRouter)
router.use('/chitietlichhen', [mid.requiresLogin, mid.requiresActive], lichhenRouter)
router.use('/kkdn', [mid.requiresLogin, mid.requiresActive], taikhoanRouter)
router.use('/lh', [mid.requiresLogin, mid.requiresActive], taikhoanRouter)
router.use('/tt', [mid.requiresLogin, mid.requiresActive], taikhoanRouter)
router.use('/kich-hoat-tai-khoan', [mid.requiresLogin], kichhoattaikhoanRouter)
router.use('/cmt', [mid.requiresLogin, mid.requiresActive], chitietketnoidammeRouter)
router.use('/pq', [mid.requiresLogin, mid.requiresActive], taikhoanRouter)

module.exports = router;