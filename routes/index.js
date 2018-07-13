'use strict';
const express = require('express');
const router = express.Router();
const knex = require('../knex');


// const bcrypt = require('bcrypt-as-promised');

router.get('/', (req, res) => {
    req.session = null;
    res.render('index', {title: 'Home Page'});
    // console.log('Cookie: ', cookieParser.signedCookies(cookies, 'keyboard cat'));

});

module.exports = router;