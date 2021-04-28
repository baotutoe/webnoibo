var mongoose = require('mongoose');

var productSchema  = new mongoose.Schema({
	tieude: String,
	ghichu: String,
    noidung: String

});

var Bangmoi2 = mongoose.model('Bangmoi2', productSchema ,  'Bangmoi2');

module.exports = Bangmoi2;