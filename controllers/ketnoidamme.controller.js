var Product = require('../models/product.model');

module.exports.index = async function(req, res) {
      var products = await Product.find();
      // console.log(products);
	res.render('ketnoidamme/index', {
		products: products
	});
};
