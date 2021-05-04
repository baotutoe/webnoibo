const ROLES = require('../constant/role.constant');
const STATUS = require('../constant/status.constant');

function isSession(req) {
    if (req.session && req.session.userId) {
        return true;
    }
    return false;
}

function isAdmin(req) {
    if (req.session.roles.includes(ROLES.ADMIN)) {
        return true;
    }
    return false;
}

function isTeacher(req) {
    if (req.session.roles.includes(ROLES.TEACHER)) {
        return true;
    }
    return false;
}

function isStudent(req) {
    if (req.session.roles.includes(ROLES.STUDENT)) {
        return true;
    }
    return false;
}

function isActive(req) {
    console.log(STATUS.ACTIVE);
    console.log(req.session.status);
    console.log(STATUS.ACTIVE === req.session.status);
    if (STATUS.ACTIVE === req.session.status) {
        return true;
    }
    return false;
}

function loggedOut(req, res, next) {
    if (isSession(req)) {
        return res.redirect('/');
    }
    return next();
}

function requiresLogin(req, res, next) {
    console.log(req.session);
    if (!isSession(req)) {
        console.log('You must be logged in to view this page.');
        let err = new Error('You must be logged in to view this page.');
        err.status = 401;
        return next(err);
    }
    console.log('login passed');
    return next();
}

function requiresActive(req, res, next) {
    if (!isActive(req)) {
        console.log('You must be active to view this page.');
        let err = new Error('You must be active to view this page.');
        err.status = 402;
        return next(err);
    }
    return next();
}

function requiresAdmin(req, res, next) {
    if (isAdmin(req)) {
        return next();
    }

    let err = new Error('Permission denied');
    err.status = 403;
    return next(err);
}

function requiresTeacher(req, res, next) {
    if (isTeacher(req)) {
        return next();
    }

    let err = new Error('Permission denied');
    err.status = 403;
    return next(err);
}

function requiresStudent(req, res, next) {
    if (isStudent(req)) {
        return next();
    }

    let err = new Error('Permission denied');
    err.status = 403;
    return next(err);
}

module.exports = {
    loggedOut,
    requiresActive,
    requiresLogin,
    requiresAdmin,
    requiresTeacher,
    requiresStudent
};