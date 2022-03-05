import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema({
    //_id:mongoose.Schema.Types.ObjectId,
    firstName: {
        type: String,
        require: true
    },
    lastName: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true
    },
    phone: {
        type: Number,
        minlength: 10,
        maxlength: 10,
        unique: true,
        require: true
    },
    // state: {
    // 	type: String,
    // 	maxlength: 50
    // },
    // postalcode: {
    // 	type: Number,
    // 	maxlength: 6, minlength: 6
    // },
    // role: {
    // 	type: String,
    // 	require: true
    // },
    token: {
        type: String
    }
    // gender: {
    // 	type: String,
    // 	default: 'Not selected'
    // }
});
//userSchema.plugin(uniqueValidator);
userSchema.pre('save', async function (next) {
    try {
        console.log(this.password)
        const salt = await bcrypt.genSalt(10)
        console.log("salt", salt);
        console.log("password", this.password);
        const hashedPassword = await bcrypt.hash(this.password, salt)
        this.password = hashedPassword
        next()
    }
    catch (error) {
        next(error)
    }
})


const user = mongoose.model('users', userSchema);

export default user;