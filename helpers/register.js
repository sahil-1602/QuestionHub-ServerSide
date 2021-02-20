var User = require("../models/user");
var passport = require("passport");
var express = require("express");

exports.registerUser = function(req, res){
    var newUser = new User({username: req.body.username});
    User.register(newUser, req.body.password)
    .then(function(user){
        passport.authenticate("local")(req, res, function(){
            res.json({message:"success", user:user});
        });
    })
    .catch(function(err){
        res.json(err);
    })
}
