var mongoose = require('mongoose');

var productSchema  = new mongoose.Schema({
	tieude: String,
	ghichu: String,
	noidung: String,
	userid : String
});

var hoidap = mongoose.model('hoidap', productSchema ,  'hoidap');

module.exports = hoidap;