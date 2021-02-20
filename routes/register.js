var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();
var User = require('../models/user');
var helpers = require('../helpers/register');

//code will go here
router.route('/').post(helpers.registerUser);


module.exports = router;