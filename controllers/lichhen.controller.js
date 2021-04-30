const Lichgapmat = require('../models/lichgapmat.model');
const Service = {

  index: async (req, res, next) => {
    try {
		var lichgapmats = await Lichgapmat.find();
      // console.log(products);
	res.render('lichhen/index', {
		lichgapmats: lichgapmats
	})
    }
    catch (err) {
      next(err)
    }
  },
  chitiet: async (req, res, next) => {
    try {
		const id = req.params.id
		console.log(id)
		let lichgapmats = await Lichgapmat.find({_id:id});
		console.log(lichgapmats)
		res.render('lichhen/chitietlichhen', {
			lichgapmats: lichgapmats
		})
	  }
	  catch (err) {
		next(err)
	  }
  }
}
module.exports = Service