const mongoose = require('mongoose');
const ROLES = require('../constant/role.constant');
const STATUS = require('../constant/status.constant');

const UserSchema = new mongoose.Schema({
    //schema: cấu trúc của 1 collection 
    name: {type: String, default: 'unknown', unique: true},    
    email: {type: String, match:/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/, unique: true},
    password: {type: String, required: true},
    roles: {type: [String], required: true, default: [ROLES.STUDENT]},
    status: {type: String, required:true, default: STATUS.INACTIVE}
})
//Chuyển từ Schema sang Model
var User= mongoose.model('User', UserSchema); 
module.exports = User;

