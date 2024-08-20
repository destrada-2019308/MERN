import { Schema, model } from 'mongoose'

const userSchema = Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    lastname: {
        type: String,
        required: true,
        trim: true
    },
    username: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    password: {
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
    phone: {
        type: String,
        required: true,
        trim: true
    },
    role: {
        type: String,
        uppercase: true,
        enum: ['CLIENT', 'ADMIN'],
        required: true,
        trim: true
    }
},{
    versionKey: false
})

export default model('user', userSchema)