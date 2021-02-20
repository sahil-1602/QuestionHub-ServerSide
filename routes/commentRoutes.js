var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();
var Comment = require('../models');
var helpers = require('../helpers/comment');

router.route('/:questionId').post(helpers.addComment);
router.route('/:questionId/:commentId').get(helpers.getComment);

module.exports = router;