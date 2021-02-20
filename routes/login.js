var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();
var User = require('../models/user');
var passport = require("passport");

router.route('/').post(function(req, res){
    var loginUser = new User({username: req.body.username, password: req.body.password});
    req.login(loginUser, function(err) {
        if (err) { res.send(err) }
        return res.json(req.user);
    });
});


module.exports = router;