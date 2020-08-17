const mongoose = require('mongoose');
const Product = mongoose.model('Product');
const bcrypt = require('bcrypt');


const insertUc = async (tieude, ghichu, noidung) => {
  try {
      const newProduct = new Product();
      newProduct.tieude = tieude;
      newProduct.ghichu = ghichu;
      newProduct.noidung = noidung;   
      await newProduct.save();
  } catch(error) {
      // console.log(error);
      if (error.code === 11000) {
        throw "Lỗi";
      }
      //throw error
  }
};
module.exports.index = function(req, res) {
  res.render('dangkyyeucau/index');
};
module.exports.create=  async function(req, res){

  try {
    let {tieude, ghichu, noidung} = req.body;
      await insertUc(tieude, ghichu, noidung);
      res.redirect('/yeu-cau');
  } catch(error) {
    console.log(error);
    res.render('dangkyyeucau/index', {
      // lopmoi: req.body
  });
  }
};  