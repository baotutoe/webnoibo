require('dotenv').config();
require('./models/db');
var express = require('express')
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
const path = require('path');
var csurf = require('csurf');
var mongoose = require('mongoose');
var app = express()
var port = 3000
const multer = require('multer') // v1.0.5
const upload = multer() // for parsing multipart/form-data

app.set('view engine', 'pug');
app.set('views', './views');

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded


// app.use(express.static(path.join(__dirname, "public")));

var trangchuRouter= require('./routes/trangchu.route');
var gioithieuRouter= require('./routes/gioithieu.route');
var dangnhapRouter= require('./routes/dangnhap.route');
var dangkytkRouter= require('./routes/dangkytk.route');
var dangkyyeucauRouter= require('./routes/dangkyyeucau.route');
var thaytroRouter= require('./routes/thaytro.route');
var dangxuatRouter= require('./routes/dangxuat.route');
var ketnoidammeRouter= require('./routes/ketnoidamme.route');
var khoanhkhacdangnhoRouter= require('./routes/khoanhkhacdangnho.route');
var taikhoanRouter= require('./routes/taikhoan.route');
var dangkylichhenRouter= require('./routes/dangkylichhen.route');
var lichhenRouter= require('./routes/lichhen.route');
var chitietketnoidammeRouter= require('./routes/chitietketnoidamme.route');



app.use('/',trangchuRouter)
app.use('/gioithieu',gioithieuRouter)
app.use('/login',dangnhapRouter)
app.use('/dangky-t-k',dangkytkRouter)
app.use('/dangkyyeucau',dangkyyeucauRouter)
app.use('/thaytro',thaytroRouter)
app.use('/dangxuat',dangxuatRouter)
app.use('/ketnoidamme',ketnoidammeRouter)
app.use('/khoanhkhacdangnho',khoanhkhacdangnhoRouter)
app.use('/taikhoan',taikhoanRouter)
app.use('/dangkylichhen',dangkylichhenRouter)
app.use('/lichhen',lichhenRouter)
app.use('/chitietketnoidamme',chitietketnoidammeRouter)
app.use('/chitietthaytro',thaytroRouter)
app.use('/chitietlichhen',lichhenRouter)





app.get('/dang-nhap', function(req, res) {
    // res.render('');
    res.render('dangnhap/index',{
      // email : req.signedCookies.email
    }
    );

  });
app.get('/yeu-cau', function(req, res) {
    // res.render('');
    res.render('gioithieu/index',{
      // email : req.signedCookies.email
    }
    );

  });
app.set("views", path.join(__dirname, "views"));

// app.use(express.static(path.join(__dirname, "public")));





app.use(cookieParser("sdfas"));


app.use(express.static('public'));

app.listen(port, function() {
  console.log('Server listening on port ' + port);
});
