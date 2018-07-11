'use strict';
const express = require('express');
const router = express.Router();
const knex = require('../knex');
// const bcrypt = require('bcrypt-as-promised');

router.get('/clientHome', (req, res) => {
    res.render('clientHome', {title: 'Client Home Page'});

});

module.exports = router;