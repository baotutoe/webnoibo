var mongoose = require('mongoose');

var productSchema  = new mongoose.Schema({
	hoten: String,
	lop: String,
    email: String,
    ngayhen: String,
    ngaykt: String,
    noidung: String,
    lido: String
});

var lichgapmat = mongoose.model('lichgapmat', productSchema ,  'lichgapmat');

module.exports = lichgapmat;