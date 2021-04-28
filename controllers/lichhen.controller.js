var Lichgapmat = require('../models/lichgapmat.model');

module.exports.index = async function(req, res) {
      var lichgapmats = await Lichgapmat.find();
      // console.log(products);
	res.render('lichhen/index', {
		lichgapmats: lichgapmats
	});
};
