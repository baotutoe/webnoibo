var mongoose = require('mongoose');

var productSchema  = new mongoose.Schema({
	idsp: String,
	mes: String,
	nameuser : String
});

var cmt = mongoose.model('cmt', productSchema ,  'cmt');

module.exports = cmt;