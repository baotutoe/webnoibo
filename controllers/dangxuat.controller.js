module.exports.logout = function(req, res) {
    res.clearCookie('email');
    // res.redirect('/dang-nhap');
    res.redirect('/dang-nhap');
  }; 