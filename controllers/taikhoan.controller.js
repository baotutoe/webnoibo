const Product = require('../models/product.model')
const Product_kkdn = require('../models/product_kkdn.model')
const mongoose = require('mongoose');
const lichgapmat = mongoose.model('lichgapmat');

// const mongoose = require('mongoose');
// const Product = mongoose.model('Product');
// const bcrypt = require('bcrypt');
const updateUc = async (id, tieude, ghichu, noidung) => {
	try {
		const newProduct = Product.findById(id);
		newProduct.tieude = tieude;
		newProduct.ghichu = ghichu;
		newProduct.noidung = noidung;
		await newProduct.save();
	} catch (error) {
		// console.log(error);
		if (error.code === 11000) {
			throw "Lỗi";
		}
		//throw error
	}
};
const Service = {
	indexkkdn: async (req, res, next) => {
		try {
			const products = await Product_kkdn.find()
			res.render('taikhoan/khoanhkhacdangnho_admin', {
				products: products
			})
		}
		catch (err) {
			next(err)
		}
	},
	indexlh: async (req, res, next) => {
		try {
			const products = await lichgapmat.find()
			res.render('taikhoan/lichhen_admin', {
				products: products
			})
		}
		catch (err) {
			next(err)
		}
	},
	index: async (req, res, next) => {
		try {
			const products = await Product.find()
			//   console.log(products);
			res.render('taikhoan/index', {
				products: products
			})
		}
		catch (err) {
			next(err)
		}
	},
	update: async (req, res, next) => {
		try {
			const body = req.body, id = body.id, tieude = body.tieude, noidung = body.noidung, ghichu = body.ghichu
			await Product.findByIdAndUpdate(id, {
				tieude: tieude,
				ghichu: ghichu,
				noidung: noidung
			})
			let products = await Product.find()
			res.render('taikhoan/index', {
				products: products
			})
		}
		catch (err) {
			next(err)
		}
	},
	delete: async (req, res, next) => {
		try {
			const body = req.params, id = body.id
			console.log(id)
			await Product.findByIdAndDelete(id)
			let products = await Product.find()
			res.render('taikhoan/index', {
				products: products
			})
		}
		catch (err) {
			next(err)
		}
	},
	deletekkdn: async (req, res, next) => {
		try {
			const body = req.params, id = body.id
			console.log(id)
			await Product_kkdn.findByIdAndDelete(id)
			let products = await Product_kkdn.find()
			res.render('taikhoan/khoanhkhacdangnho_admin', {
				products: products
			})
		}
		catch (err) {
			next(err)
		}
	},
	deletelh: async (req, res, next) => {
		try {
			const body = req.params, id = body.id
			console.log(id)
			await lichgapmat.findByIdAndDelete(id)
			let products = await lichgapmat.find()
			res.render('taikhoan/lichhen_admin', {
				products: products
			})
		}
		catch (err) {
			next(err)
		}
	}
}
module.exports = Service