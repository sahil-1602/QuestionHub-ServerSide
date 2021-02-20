var Question = require("../models/question");
var Comment = require("../models/comment");


//ADDING A NEW COMMENT
exports.addComment = function(req, res){
    console.log(req.params.questionId);
    Question.findById({_id: req.params.questionId})
    .then(function(foundQuestion){
        console.log("we found question")
        Comment.create(req.body)
        .then(function(comment){
            comment.save();
            // res.json(comment);
            foundQuestion.comments.push(comment);
            foundQuestion.save();
            res.json(foundQuestion);
        })
        .catch(function(err){
            res.send(err);
        })
    })
    .catch(function(err){
        res.send(err);
    })
}

//GETTING A NEW COMMENT
exports.getComment = function(req, res){
    Comment.findById({_id: req.params.commentId})
    .then(function(comment){
        res.json(comment);
    })
    .catch(function(err){
        res.send(err);
    })
}

//UPDATING COMMENT
exports.updateComment = function(req, res){
    Question.findById({_id: req.params.questionId})
    .then(function(foundQuestion){
        Comment.findByIdAndUpdate({text: req.body.text})
        .then(function(comment){
            comment.save();
            foundQuestion.comments.map(com => {
                if(com.author.id === comment.author.id){
                    com = comment;
                }
            })
            foundQuestion.save();
            res.json(foundQuestion);
        })
        .catch(function(err){
            res.send(err);
        })
    })
    .catch(function(err){
        res.send(err);
    })
}


//DELETING COMMENT
exports.deleteComment = function(req, res){
    Comment.remove({_id: req.params.commentId})
    .then(function(){
        res.json({message: "We deleted your comment"});
    })
    .catch(function(err){
        res.send(err)
    })
}

module.exports = exports;