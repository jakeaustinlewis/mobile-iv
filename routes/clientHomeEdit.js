'use strict';
const express = require('express');
const router = express.Router();
const knex = require('../knex');
// const bcrypt = require('bcrypt-as-promised');

router.get('/clientHomeEdit', (req, res) => {
    res.render('clientHomeEdit', {title: 'Client Edit Home Page'});

});

router.post('/clientHomeEdit', (req, res) => {
    res.render('clientHomeEdit', {title: 'Client Home Page'});
});

module.exports = router;