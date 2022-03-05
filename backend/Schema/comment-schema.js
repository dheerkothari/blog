import mongoose from "mongoose";

const CommentSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    postId: {
        type: String,
        require: true
    },
    date: {
        type: String,
        require: true
    },
    comments: {
        type: String,
        require: true
    },
})

const comment = mongoose.model('comment', CommentSchema)

export default comment;