'use strict';
const express = require('express');
const router = express.Router();
const knex = require('../knex');
// const bcrypt = require('bcrypt-as-promised');
let session = require('express-session');

router.get('/clientHome', (req, res) => {
    res.render('clientHome', {title: 'Client Home Page', first_name: 'Ed'});
});

router.post('/clientHome', (req, res) => {
    res.render('clientHome', {title: 'Client Home Page'});
});

module.exports = router;