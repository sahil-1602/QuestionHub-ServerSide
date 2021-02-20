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

//UPDATING COMMENT



//DELETING COMMENT

module.exports = exports;