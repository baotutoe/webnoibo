var mongoose = require('mongoose');

var productSchema  = new mongoose.Schema({
	tieude: String,
	ghichu: String,
    noidung: String

});

var Bangmoi = mongoose.model('Bangmoi', productSchema ,  'Bangmoi');

module.exports = Bangmoi;