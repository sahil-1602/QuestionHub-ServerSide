var mongoose = require("mongoose");

var questionSchema = new mongoose.Schema(
    {
        query : {
            type: String,
        },
        description: {
            type: String,
        },
        img: {
            type: String,
            default: "https://picsum.photos/200"
        },
        isOpen: {
            type: Boolean,
            default: true
        },
        author : {
            id : {
                type : mongoose.Schema.Types.ObjectId,
                ref  : "User"
            },
            username : String,
        },
        comments    : [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Comment"
            }
        ]
    }
);

var Question = mongoose.model('Question', questionSchema);

module.exports = Question;