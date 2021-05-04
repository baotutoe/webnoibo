const mongoose = require('mongoose');

let {
    MONGO_USERNAME,
    MONGO_PASSWORD,
    MONGO_HOSTNAME,
    MONGO_PORT,
    MONGO_DB
} = process.env;

MONGO_HOSTNAME = MONGO_HOSTNAME ? MONGO_HOSTNAME : 'localhost'
MONGO_PORT = MONGO_PORT ? MONGO_PORT : '27017'
MONGO_DB = MONGO_DB ? MONGO_DB : 'webnoibo-database'

let url = `mongodb://${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}?authSource=admin`;

if (MONGO_USERNAME) {
    url = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}?authSource=admin`;
}

const options = {
    useNewUrlParser: true,
    reconnectTries: Number.MAX_VALUE,
    reconnectInterval: 500,
    connectTimeoutMS: 10000,
};

mongoose.connect(url, options).then(function () {
    console.log('MongoDB is connected');
})
    .catch(function (err) {
        console.log(err);
    });

require('./user.model');
require('./product.model');
require('./product_kkdn.model');
require('./hoidap.model');
require('./lichgapmat.model');
require('./bangmoi.model');
require('./bangmoi2.model');
require('./cmt.model');
