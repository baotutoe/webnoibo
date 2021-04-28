var Product_kkdn = require('../models/product_kkdn.model');

module.exports.index = async function(req, res) {
      var product_kkdns = await Product_kkdn.find();
	res.render('khoanhkhacdangnho/index', {
		product_kkdns: product_kkdns
	});
};
