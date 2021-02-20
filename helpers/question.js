var Question = require("../models/question");
var Comment = require('../models/comment');

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
exports.updateQuestion = function(req, res){
    var query = req.body.query;
    var description = req.body.description;
    var img = req.body.img;
    var isOpen = req.body.isOpen;

    Question.findById({_id: req.params.questionId})
    .then(function(question){
        return Object.assign(question, 
            {query: query, description: description, img:img, isOpen: isOpen});
    })
    .then(function(question){
        return question.save();
    })
    .then(function(updatedQuestion){
        res.json(updatedQuestion);
    })
    .catch(function(err){
        res.send(err);
    });
}


//GET QUESTION BY ID
exports.readQuestion = function(req, res){
    Question.findById({_id: req.params.questionId})
    .then(function(foundQuestion){
        res.json(foundQuestion);
    })
    .catch(function(err){
        res.send(err);
    })
}


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

//GET ALL COMMENTS FOR A QUESTION
exports.getComments = function(req, res){
    var results = [];
    Question.findById({_id: req.params.questionId})
    .then(function(question){
        var length = question.comments.length;
        question.comments.map((commentId, i) => {
            Comment.findById({_id: commentId})
            .then(function(comment){
                results.push(comment);
                if(length === results.length){
                    res.json(results);
                }else{
                    return;
                }
            })
            .catch(function(err){
                res.send(err);
            })
        })
    })
    .catch(function(err){
        res.send(err);
    })
}

//GET ALL QUESTIONS FOR A USER
exports.getUserQuestions = function(req, res){
    var results = [];
    Question.find()
    .then(function(questions){
        var length = questions.length;
        for(var i=0; i<length; i++){
            if(questions[i].author.id == req.params.userId){
                results.push(questions[i]);
            }
        }
        res.json(results);
    })
    .catch(function(err){
        res.send(err);
    });
}

module.exports = exports;