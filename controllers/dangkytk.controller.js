const mongoose = require('mongoose');
const User = mongoose.model('User');
const bcrypt = require('bcrypt');
const ROLES = require('../constant/role.constant');
const STATUS = require('../constant/status.constant');

const insertUser = async (name, email, password) => {
  try {
    //Mã hoá password trước khi lưu vào DB
    const encryptedPassword = await bcrypt.hash(password, 10);//saltRounds = 10
    const newUser = new User();
    newUser.name = name;
    newUser.email = email;
    newUser.password = encryptedPassword;
    await newUser.save();
    console.log('Created user: ' + newUser);
  } catch (error) {
    // console.log(error);
    if (error.code === 11000) {
      throw "Tên hoặc email đã tồn tại";
    }
    //throw error
  }
};
module.exports.index = function (req, res) {
  res.render('dangkytk/index');
};
module.exports.create = async function (req, res) {

  try {
    let { name, email, password } = req.body;
    await insertUser(name, email, password);
    res.redirect('/dang-nhap');
  } catch (error) {
    console.log(error);
    res.render('dangkytk/index', {
      // lopmoi: req.body
    });
  }
};