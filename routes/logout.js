var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();
var User = require('../models/user');

//code will go here
router.route('/').get(function(req, res){
    req.logOut();
});
module.exports = router;