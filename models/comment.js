var mongoose = require("mongoose");

var commentSchema = new mongoose.Schema(
    {
        text : {
            type: String,
            default: "hello from Sumit"
        },
        author : {
            id : {
                type: String,
                default: "1234"
            },
            username : {
                type: String,
                default: "comment schema"
            }
        }
    }
);

var Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;