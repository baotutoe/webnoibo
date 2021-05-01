function unauthorized(err, req, res, next) {
    res.redirect('/dang-nhap')
}

function errorHandler(err, req, res, next) {
    if (err.status === 401) {
        unauthorized(err, req, res, next)
    }
    res.send({
        status: err.status ? err.status : '500',
        message: err.message
    });
}

module.exports = errorHandler;