'use strict';
const express = require('express');
const router = express.Router();
const knex = require('../knex');
// const bcrypt = require('bcrypt-as-promised');
const bcrypt = require('bcrypt');


router.get('/login', (req, res) => {
    res.render('login', {
        title: 'Login Page', error: req.session.loginError
    });
});


router.post('/login', (req, res, next) => {
    // Validate if username already exists
    let currentUser = null;
    knex('users')
        .where('username', req.body.username)
        .then(function (user) {
            if (user.length !== 1) {
                let usernameDoesNotExistError = new Error('Username does not exist');
                // console.log(user.length);
                
                // req.session.error = 'Username and/or password is incorrect. Please try again or make a new account';
                return Promise.reject(usernameDoesNotExistError);
  
        

            } else {
                currentUser = user[0];
                let hash = currentUser.hashed_password;

                if (bcrypt.compare(req.body.password, hash)) {
           
                    // The users's password is valid.
                    req.session.user = currentUser;
                    // res.send(currentUser);
                    if(currentUser.userType==='client') {
                        //if userType is client, go to client home page
                        res.redirect('/clientHome');
                    } else {
                        //if userType is phebotomist, go to phlebotomist home page
                        //
                        //when /driverHome page is build, change bellow to res.redirect('/diverHome');
                        res.redirect('/clientHome');
                    }
                    
                } else {
                    console.log("You're information is incorrect!")
                    res.redirect('/login');
                }
            }
        })

        .catch(function (error) {
            console.error('Create user error:', error);
            if (error.message === 'Username does not exist') {
                req.session.loginError = error.message;
                console.log(req.session.loginError);
                res.redirect('/login');

            } else {
                res.status(500).send({
                    error: error.message
                });
                
            }
            // res.redirect('/login');
        })
});


module.exports = router;