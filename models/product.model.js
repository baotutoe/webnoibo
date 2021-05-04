var mongoose = require('mongoose');

var productSchema  = new mongoose.Schema({
	tieude: String,
	ghichu: String,
	noidung: String,
	userid : String
});

var Product = mongoose.model('Product', productSchema ,  'products');

module.exports = Product;