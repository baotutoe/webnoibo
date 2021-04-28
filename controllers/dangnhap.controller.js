const mongoose = require('mongoose');
const User = mongoose.model('User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');//Mã hoá 1 jsonObject thành token(string)
const secretString = "secret string";//tự cho 1 string tuỳ ý
module.exports.index = function (req, res) {
    res.render('dangnhap/index');
};


module.exports.check = async function (req, res, next) {
    // console.log(1);
    let { email, password } = req.body;
    try {
        let foundUser = await User.findOne({ email: email.trim()})
            .exec();
        // console.log(foundUser);
        // console.log(2);
        if (!foundUser) {
            res.render('dangnhap/index',{
                error: 'Tài khoản không tồn tại !',
                values: req.body
            });
            // console.log(error);
            return;
        }
        // console.log(4);
        let encryptedPassword = foundUser.password;
        // console.log(5);
        let checkPassword = await bcrypt.compare(password, encryptedPassword);
        // console.log(checkPassword);

        if (checkPassword === true) {
            //Đăng nhập thành công
            // console.log(7);
            let jsonObject = {
                id: foundUser._id
            }

            res.redirect('/');
        } else {
            res.render('dangnhap/index', {
                error: 'Sai mật khẩu !',
                values: req.body
            });
            return;
        }
    } catch (error) {

        next(error);
    }
}