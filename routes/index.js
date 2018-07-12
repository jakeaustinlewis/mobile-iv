'use strict';
const express = require('express');
const router = express.Router();
const knex = require('../knex');


// const bcrypt = require('bcrypt-as-promised');

router.get('/index', (req, res) => {
    res.render('index', {title: 'Home Page'});
    // console.log('Cookie: ', cookieParser.signedCookies(cookies, 'keyboard cat'));

});

module.exports = router;