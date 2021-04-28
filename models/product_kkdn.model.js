var mongoose = require('mongoose');

var productSchema  = new mongoose.Schema({
	tieude: String,
	ghichu: String,
	noidung: String
});

var Product_kkdnn = mongoose.model('Product_kkdn', productSchema ,  'Product_kkdn');

module.exports = Product_kkdnn;