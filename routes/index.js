'use strict';
const express = require('express');
const router = express.Router();
const knex = require('../knex');
// const bcrypt = require('bcrypt-as-promised');

router.get('/index', (req, res) => {
    res.render('index', {title: 'Home Page'});

});




module.exports = router;