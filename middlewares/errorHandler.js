function unauthorized(err, req, res, next) {
    res.redirect('/dang-nhap');
}

function mustBeAcive(err, req, res, next) {
    res.redirect('/kich-hoat-tai-khoan');
}

function errorHandler(err, req, res, next) {
    if (401 === err.status) {
        unauthorized(err, req, res, next)
    }
    if (402 === err.status) {
        mustBeAcive(err, req, res, next)
    }
    res.send({
        status: err.status ? err.status : '500',
        message: err.message
    });
}

module.exports = errorHandler;