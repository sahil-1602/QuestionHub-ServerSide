var mongoose = require("mongoose");

var questionSchema = new mongoose.Schema(
    {
        query : {
            type: String,
            default: "how to fix this?"
        },
        description: {
            type: String,
            default: "This is so and so thing.."
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
                type: String,
                default: "1234"
            },
            username : {
                type: String,
                default: "question Schema"
            }
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