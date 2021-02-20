var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();
var Question = require('../models/question');
var helpers = require('../helpers/question');

//code will go here
router.route('/').get(helpers.getQuestions).post(helpers.addQuestion);
router.route('/:questionId').delete(helpers.deleteQuestion);

module.exports = router;