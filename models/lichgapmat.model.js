var mongoose = require('mongoose');

var productSchema  = new mongoose.Schema({
	tieude: String,
	ghichu: String,
    noidung: String,
    ngayhen: String,
    giohen: String
});

var lichgapmat = mongoose.model('lichgapmat', productSchema ,  'lichgapmat');

module.exports = lichgapmat;