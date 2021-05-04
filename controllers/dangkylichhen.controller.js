const mongoose = require('mongoose');
const lichgapmat = mongoose.model('lichgapmat');
const bcrypt = require('bcrypt');




const insertUc = async (hoten, lop, email, ngayhen, ngaykt,noidung,lido,userid) => {
  try {
    const newlichgapmat = new lichgapmat()
    newlichgapmat.hoten = hoten
    newlichgapmat.lop = lop
    newlichgapmat.email = email
    newlichgapmat.ngayhen = ngayhen
    newlichgapmat.ngaykt = ngaykt
    newlichgapmat.noidung = noidung
    newlichgapmat.lido = lido
    newlichgapmat.userid = userid

    await newlichgapmat.save()
  } catch (error) {
    // console.log(error);
    if (error.code === 11000) {
      throw "Lỗi"
    }
    //throw error
  }


};
module.exports.index = function (req, res) {
  res.render('dangkylichhen/index');
};
module.exports.create = async function (req, res) {

  try {
    let userid = req.session.userId
    let body = req.body,hoten = body.name,lop= body.lop, email=body.email, ngayhen =body.ngayhen +'-'+ body.giohen +':'+ body.phuthen+'-'+body.checkgio,ngaykt =body.ngaykt +'-'+ body.giokt +':'+ body.phutkt+'-'+body.checkkt,noidung=body.noidung,lido=body.lido
    await insertUc( hoten, lop, email, ngayhen,ngaykt,noidung,lido,userid)
    res.redirect('/lichhen');
  } catch (error) {
    console.log(error);
    res.render('dangkylichhen/index', {
      // lopmoi: req.body
    });
  }
};
