var Hoidap = require('../models/hoidap.model');

module.exports.index = async function(req, res) {
      var hoidaps = await Hoidap.find();
	res.render('thaytro/index', {
		hoidaps: hoidaps
	});
};
