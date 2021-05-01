const mongoose = require('mongoose');
const User = mongoose.model('User');
const bcrypt = require('bcrypt');

module.exports.index = function (req, res) {
    res.render('dangnhap/index');
};

module.exports.check = async function (req, res, next) {
    let {email, password} = req.body;
    try {
        let foundUser = await User.findOne({email: email.trim()}).exec();
        if (!foundUser) {
            res.render('dangnhap/index', {
                error: 'Tài khoản không tồn tại !',
                values: req.body
            });
            return;
        }

        let encryptedPassword = foundUser.password;
        let checkPassword = await bcrypt.compare(password, encryptedPassword);

        if (checkPassword === false) {
            res.render('dangnhap/index', {
                error: 'Sai mật khẩu !',
                values: req.body
            });

        }

        req.session.userId = foundUser._id
        res.redirect('/');
    } catch (error) {
        next(error);
    }
}