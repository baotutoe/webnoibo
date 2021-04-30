var Hoidap = require('../models/hoidap.model');
const Service = {

  index: async (req, res, next) => {
    try {
		const hoidaps = await Hoidap.find()
		res.render('thaytro/index', {
			hoidaps: hoidaps
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
		let ctproducts = await Hoidap.find({_id:id});
		console.log(ctproducts)
		res.render('thaytro/chitietthaytro', {
		  ctproducts: ctproducts
		})
	  }
	  catch (err) {
		next(err)
	  }
  }
}
module.exports = Service