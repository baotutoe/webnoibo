var Product1 = require('../models/product.model');
const mongoose = require('mongoose');
const Product = mongoose.model('Product');
const bcrypt = require('bcrypt');

module.exports.index = async function(req, res) {
      var products = await Product1.find();
    //   console.log(products);
	res.render('taikhoan/index', {
		products: products
	});
};
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
module.exports.update=  async function(req, res){

	try {
	  let {tieude2, ghichu2, noidung2} = req.body;
	//   console.log(tieude2);
		await insertUc(tieude2, ghichu2, noidung2);
		res.redirect('/yeu-cau');
	} catch(error) {
	  console.log(error);
	  res.render('taikhoan/index', {
		// lopmoi: req.body
	});
	}
  };  