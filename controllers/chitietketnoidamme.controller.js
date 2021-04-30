const Product1 = require('../models/product.model');
const Service = {

  index: async (req, res, next) => {
    try {
      const id = req.params.id
      console.log(id)
      let ctproducts = await Product1.find({_id:id});
      console.log(ctproducts)
      res.render('chitietketnoidamme/index', {
        ctproducts: ctproducts
      })
    }
    catch (err) {
      next(err)
    }
  }
}
module.exports = Service