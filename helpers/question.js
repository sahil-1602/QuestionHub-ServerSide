var Question = require("../models/question");

//GETTING ALL QUESTIONS
exports.getQuestions = function(req, res){
    Question.find()
    .then(function(question){
        res.json(question)
    })
    .catch(function(err){
        res.send(err);
    })
}


//ADDING A NEW QUESTION
exports.addQuestion = function(req, res){
    
    Question.create(req.body)
    .then(function(newQuestion){
        res.json(newQuestion);
    })
    .catch(function(err){
        res.send(err);
    })
}

//UPDATE QUESTION


//GET QUESTION BY ID


//DELETE QUESTION
exports.deleteQuestion = function(req, res){
    Question.remove({_id: req.params.questionId})
    .then(function(){
        res.json({message: "We deleted your question"});
    })
    .catch(function(err){
        res.send(err)
    })
}

module.exports = exports;