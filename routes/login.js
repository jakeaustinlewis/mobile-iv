'use strict';
const express = require('express');
const router = express.Router();
const knex = require('../knex');
// const bcrypt = require('bcrypt-as-promised');
var bcrypt = require('bcrypt');


router.get('/login', (req, res) => {
    res.render('login', {
        title: 'Login Page'
    });
});


router.post('/login', (req, res, next) => {
// Validate if username already exists
let currentUser = null;
knex('users')
    .where('username', req.body.username)
    .then(function (user) {
        if (user.length !== 1) {
            let usernameDoesNotExistsError = new Error('Username does not exist');
            return Promise.reject(usernameDoesNotExistsError);
        }
        currentUser = user[0];
        let hash = currentUser.hashed_password;
        return bcrypt.compare(req.body.password, hash)
        
    })
    .then(function (result) {
        // The users's password is valid.
        res.send(currentUser);
        res.render('clientHome', {user: currentUser});
    })
    .catch(function (error) {
        console.error('Create user error:', error);
        if (error.message === 'Username does not exist') {
            res.status(400).send({
                error: error.message
            });
        } else {
            res.status(500).send({
                error: error.message
            });
        }
    })
});


module.exports = router;