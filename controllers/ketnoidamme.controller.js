const Product = require('../models/product.model')
const nodemailer = require('nodemailer')


const Service = {

  index: async (req, res, next) => {
    try {
		const products = await Product.find();
	res.render('ketnoidamme/index', {
		products: products
	})
    }
    catch (err) {
      next(err)
    }
  },
  sendmail: async (req, res, next) => {
    try {  
	const email = req.body.EMAIL
	console.log(email)
	const transporter = nodemailer.createTransport({
		service: 'gmail',
		auth: {
			user: 'quocbaoa2k41@gmail.com',
			pass: 'bgljuker2'
		}
		})
	const mailOptions = {
			from: 'quocbaoa2k41@gmail.com',
			to: email,
			subject: 'Bạn đã đăng ký nhận thông tin từ CUBAQ',
			text: '!!!'
	} 
	transporter.sendMail(mailOptions, function(error, info){
		if (error) {
			console.log(error);
		} else {
			console.log('Email sent: ' + info.response);
		}
		})
	res.send(`Đã gửi mail đến tài khoản ${email} thành công!`)
    }
    catch (err) {
      next(err)
    }
  }
}
module.exports = Service