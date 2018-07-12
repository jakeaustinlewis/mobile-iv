'use strict';
const express = require('express');
const router = express.Router();
const knex = require('../knex');
// const bcrypt = require('bcrypt-as-promised');
let session = require('express-session');

// let clientHomeLogOutButton = document.getElementById('clientHomeLogOutButton');

// clientHomeLogOutButton.addEventListener



router.get('/clientHome', (req, res) => {

    console.log(req.session.user);
    res.render('clientHome', {title: 'Client Home Page', user: req.session.user});
});


router.post('/clientHome', (req, res) => {
    res.render('clientHome', {title: 'Client Home Page'});
});

module.exports = router;