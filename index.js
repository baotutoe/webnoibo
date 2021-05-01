require('dotenv').config();
require('./models/db');

const path = require('path');
let express = require('express')
let bodyParser = require('body-parser');
let app = express()
let port = 3000
let session = require('express-session');
let errorHandler = require('./middlewares/errorHandler')
let routes = require('./routes/index');

app.set('view engine', 'pug');
app.set("views", path.join(__dirname, "views"));
app.use(express.static('public'));

// use sessions for tracking logins
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));

// make user ID available in templates
app.use((req, res, next) => {
    res.locals.currentUser = req.session.userId;
    next();
});

// for parsing application/json
app.use(bodyParser.json());

// for parsing application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}));

app.use('/', routes);

app.use(errorHandler)

app.listen(port, function () {
    console.log('Server listening on port ' + port);
});
