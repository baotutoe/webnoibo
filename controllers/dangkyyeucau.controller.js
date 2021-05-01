const mongoose = require('mongoose');
const Product = mongoose.model('Product');
const Bangmoi = mongoose.model('Bangmoi');

const bcrypt = require('bcrypt');
const Product_kkdn = mongoose.model('Product_kkdn');
const hoidap = mongoose.model('hoidap');




const insertUc = async (tieude, ghichu, noidung,chude) => {
  console.log(chude);
  if(chude=="ketnoidamme"){
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
  }else if(chude=="khoanhkhacdangnho"){
    try {
      const newProduct_kkdn = new Product_kkdn();
      newProduct_kkdn.tieude = tieude;
      newProduct_kkdn.ghichu = ghichu;
      newProduct_kkdn.noidung = noidung;   
      await newProduct_kkdn.save();
  } catch(error) {
      // console.log(error);
      if (error.code === 11000) {
        throw "Lỗi";
      }
      //throw error
  }
  }else if(chude=="hoidap"){
    try {
      const newhoidap = new hoidap();
      newhoidap.tieude = tieude;
      newhoidap.ghichu = ghichu;
      newhoidap.noidung = noidung;   
      await newhoidap.save();
  } catch(error) {
      // console.log(error);
      if (error.code === 11000) {
        throw "Lỗi";
      }
      //throw error
  }
  }

  
};
module.exports.index = function(req, res) {
  res.render('dangkyyeucau/index');
};
module.exports.create=  async function(req, res){
  let userId = req.session.userId;
  console.log(userId);
  try {
    let {tieude, ghichu, noidung,chude} = req.body;
    console.log(tieude);
      await insertUc(tieude, ghichu, noidung,chude);
      res.redirect('/yeu-cau');
  } catch(error) {
    console.log(error);
    res.render('dangkyyeucau/index', {
      // lopmoi: req.body
  });
  }
};  
