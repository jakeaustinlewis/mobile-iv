'use strict';
const express = require('express');
const router = express.Router();
const knex = require('../knex');
// const bcrypt = require('bcrypt-as-promised');

router.get('/login', (req, res) => {
    res.render('login', {title: 'Login Page'});

});

module.exports = router;