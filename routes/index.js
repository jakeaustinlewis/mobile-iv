'use strict';
const express = require('express');
const router = express.Router();
const knex = require('../knex');


// const bcrypt = require('bcrypt-as-promised');

router.get('/', (req, res) => {
    req.session = null;
    // req.session.loginError=null;
    // console.log(req.session.loginError);
    // console.log(typeof(req.session.loginError));

    res.render('index', {title: 'Home Page'});
    // console.log('Cookie: ', cookieParser.signedCookies(cookies, 'keyboard cat'));

});

module.exports = router;