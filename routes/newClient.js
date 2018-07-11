'use strict';
const express = require('express');
const router = express.Router();
const knex = require('../knex');
// const bcrypt = require('bcrypt-as-promised');

var bcrypt = require('bcrypt');
const saltRounds = 10;
const myPlaintextPassword = 's0/\/\P4$$w0rD';
const someOtherPlaintextPassword = 'not_bacon';

router.get('/newClient', (req, res) => {
    res.render('newClient', {title: 'New Client'});
});

router.post('/newClient', (req, res, next) => {
    // Validate if username already exists
    knex('users')
    .where('username', req.body.username)
    .then(function (users) {
        // if exists, then send error back to front end saying username already exists
        if (users.length > 0) {
            // username already exists!
            let usernameExistsError = new Error('Username already exists');
            return Promise.reject(usernameExistsError);
        } else {
            // username does NOT exists!
            return bcrypt.hash(req.body.password, saltRounds);
        }
    })
    
    .then(function (hash) {
        // now create current user.
        return knex('users')
        .insert({
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                phone_number: req.body.phone_number,
                email: req.body.email,
                username: req.body.username,
                hashed_password: hash,
                userType: 'client'
            })
            .returning(['id', 'first_name', 'last_name', 'phone_number', 'email', 'username', 'userType'])
    })
    .then(function (user) {
        // YAY, users is created. Pass back to the front end.
        res.send(user)
    })
    .catch(function (error) {
        console.error('Create user error:', error);
        if (error.message === 'Username already exists') {
            res.status(400).send({error: error.message});
        } else {
            res.status(500).send({error: error.message});
        }
    })
        
});


module.exports = router;