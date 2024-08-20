import {Schema, model} from "mongoose";

const userSchema = Schema({
    username: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
},{
    versionKey: false
})

export default model('user', userSchema)