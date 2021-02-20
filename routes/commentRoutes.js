var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();
var Comment = require('../models');
var helpers = require('../helpers/comment');

router.route('/').post(helpers.addComment);

module.exports = router;