const mongoose = require('mongoose');

 mongoose.connect('mongodb://localhost:27017/webnoibo-database', { useNewUrlParser: true }, (err) => {
    if (!err) { console.log('MongoDB Connection Succeeded.') }
    else { console.log('Error in DB connection : ' + err) }
});


require('./user.model');
require('./product.model');
require('./product_kkdn.model');
require('./hoidap.model');
require('./lichgapmat.model');
require('./bangmoi.model');
require('./bangmoi2.model');




