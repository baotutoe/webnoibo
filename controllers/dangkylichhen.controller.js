const mongoose = require('mongoose');
const lichgapmat = mongoose.model('lichgapmat');
const bcrypt = require('bcrypt');




const insertUc = async (tieude, ghichu, noidung,ngayhen,giohen) => {
    try {
      const newlichgapmat = new lichgapmat();
      newlichgapmat.tieude = tieude;
      newlichgapmat.ghichu = ghichu;
      newlichgapmat.noidung = noidung;   
      newlichgapmat.ngayhen = ngayhen;   
      newlichgapmat.giohen = giohen;   
      await newlichgapmat.save();
  } catch(error) {
      // console.log(error);
      if (error.code === 11000) {
        throw "Lỗi";
      }
      //throw error
  }

  
};
module.exports.index = function(req, res) {
  res.render('dangkylichhen/index');
};
module.exports.create=  async function(req, res){

  try {
    let {tieude, ghichu, noidung,ngayhen,giohen} = req.body;
      await insertUc(tieude, ghichu, noidung,ngayhen,giohen);
      res.redirect('/yeu-cau');
  } catch(error) {
    console.log(error);
    res.render('dangkylichhen/index', {
      // lopmoi: req.body
  });
  }
};  
