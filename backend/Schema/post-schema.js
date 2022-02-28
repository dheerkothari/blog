import mongoose from "mongoose";

const PostSchema = mongoose.Schema({
    title: {
        type: String,
        require: true,
        unique: true
    },
    description: {
        type: String,
        require: true
    },
    picture: {
        type: String,
        require: false
    },
    username: {
        type: String,
        require: true
    },
    categories: {
        type: String,
        require: false
    },
    createdDate: {
        type: Date
    },
})

const post = mongoose.model('post', PostSchema);

export default post;