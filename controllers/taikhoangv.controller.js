const mongoose = require('mongoose');
const lichgapmat = mongoose.model('lichgapmat');

const Service = {
	index: async (req, res, next) => {
		try {
			let userid = req.session.userId;
			const products = await lichgapmat.find({userid:userid})
			res.render('taikhoangv/lichhen_admin', {
				products: products
			})
		}
		catch (err) {
			next(err)
		}
	},
	update: async (req, res, next) => {
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
			res.redirect('/taikhoangv')

		}
		catch (err) {
			next(err)
		}
	},
	delete: async (req, res, next) => {
		try {
			const body = req.params, id = body.id
			console.log(id)
			await lichgapmat.findByIdAndDelete(id)
			res.redirect('/taikhoangv')

		}
		catch (err) {
			next(err)
		}
	},
}
module.exports = Service