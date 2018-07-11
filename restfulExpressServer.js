'use strict';

let express = require('express');
let path = require('path');
let app = express();
let port = process.env.PORT || 8000;
let methodOverride = require('method-override');

let morgan = require('morgan'); //Morgan is used for logging request details.
let bodyParser = require('body-parser');

let index = require('./routes/index');
let newDriver = require('./routes/newDriver');
let newClient = require('./routes/newClient');
let login = require('./routes/login');
let clientHomePage = require('./routes/clientHome');


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.disable('x-powered-by'); //Sets the Boolean setting name to false
// app.use(express.static('public'));

app.use(methodOverride('_method'));

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(morgan('short'));
app.use(bodyParser.json()); //tells the system that you want json to be used ------- WHYYYYYYYYYYYYYYYYYYYYYYYYYYYY
app.use(bodyParser.urlencoded({
    extended: true
}));
// app.use(methodOverride(function (req, res) {
//     let method = req.body._method
//     delete req.body._method
//     return method
// }))

app.use(express.static(path.join(__dirname, './public')));
// app.use(express.static('./public'));

app.use(index);
app.use(newDriver);
app.use(newClient);
app.use(login);
app.use(clientHomePage);


app.use((req, res) => {
    res.sendStatus(404);
});

app.use((err, req, res, next) => {
    if (err.status) {
        return res
            .status(err.status)
            .set('Content-Type', 'text/plain')
            .send(err.message);
    }

    console.error(err.stack);
    res.sendStatus(500);
});

app.listen(port, function () {
    console.log('Listening on port', port);
});

module.exports = app;