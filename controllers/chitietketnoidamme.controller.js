const { body } = require('express-validator');
const Product = require('../models/product.model');
const cmt = require('../models/cmt.model');
const use = require('../models/user.model');

const insertUc = async (idsp, mes, nameuser) => {
  try {
    const newcmt = new cmt()
    newcmt.idsp = idsp
    newcmt.mes = mes
    newcmt.nameuser = nameuser

    await newcmt.save()
  } catch (error) {
    if (error.code === 11000) {
      throw "Lỗi"
    }
  }


};
const Service = {

  index: async (req, res, next) => {
    try {
      const id = req.params.id
      console.log(id)
      let ctproducts = await Product.find({_id:id})
      let cmts = await cmt.find({idsp:id})
      console.log(ctproducts)
      res.render('chitietketnoidamme/index', {
        ctproducts: ctproducts,
        cmts:cmts
      })
    }
    catch (err) {
      next(err)
    }
  },
  cmt: async (req, res, next) => {
    try {
      const body = req.body, idsp=body.idsp, mes= body.mes
      let userid = req.session.userId
      let user = await use.find({_id:userid})
      let nameuser = user[0].name

      await insertUc( idsp, mes, nameuser)
      res.redirect(`/chitietketnoidamme/${idsp}`)
    }
    catch (err) {
      next(err)
    }
  }
}
module.exports = Service