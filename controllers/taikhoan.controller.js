const Product = require('../models/product.model')
const Product_kkdn = require('../models/product_kkdn.model')
const mongoose = require('mongoose');
const lichgapmat = mongoose.model('lichgapmat');
const Hoidap = require('../models/hoidap.model');
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
	indextt: async (req, res, next) => {
		try {
			const products = await Hoidap.find()
			res.render('taikhoan/thaytro_admin', {
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
	updatett: async (req, res, next) => {
		try {
			const body = req.body, id = body.id, tieude = body.tieude, noidung = body.noidung, ghichu = body.ghichu
			await Hoidap.findByIdAndUpdate(id, {
				tieude: tieude,
				ghichu: ghichu,
				noidung: noidung
			})
			let products = await Hoidap.find()
			res.render('taikhoan/thaytro_admin', {
				products: products
			})
		}
		catch (err) {
			next(err)
		}
	},
	updatekkdn: async (req, res, next) => {
		try {
			const body = req.body, id = body.id, tieude = body.tieude, noidung = body.noidung, ghichu = body.ghichu
			await Product_kkdn.findByIdAndUpdate(id, {
				tieude: tieude,
				ghichu: ghichu,
				noidung: noidung
			})
			let products = await Product_kkdn.find()
			res.render('taikhoan/khoanhkhacdangnho_admin', {
				products: products
			})
		}
		catch (err) {
			next(err)
		}
	},
	updatelh: async (req, res, next) => {
		try {
			let body = req.body,id = body.id,hoten = body.name,lop= body.lop, email=body.email, ngayhen =body.ngayhen,ngaykt =body.ngaykt ,noidung=body.noidung,lido=body.lido
			await lichgapmat.findByIdAndUpdate(id, {
				hoten: hoten,
				lop: lop,
				email: email,
				ngayhen: ngayhen,
				ngaykt:ngaykt,
				noidung: noidung,
				lido:lido
			})
			let products = await lichgapmat.find()
			res.render('taikhoan/lichhen_admin', {
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
	deletett: async (req, res, next) => {
		try {
			const body = req.params, id = body.id
			console.log(id)
			await Hoidap.findByIdAndDelete(id)
			let products = await Hoidap.find()
			res.render('taikhoan/thaytro_admin', {
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