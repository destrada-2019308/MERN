import { Schema, model } from "mongoose";

const taskSchema = Schema({
    name: {
        type: String, 
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    initDate: {
        type: Date,
        required: true
    },
    endDate: {
        type: Date,
        required: true
    },
    status:{
        type: String,
        uppercase: true,
        enum: ['COMPLETE', 'INCOMPLETE'],
        default: 'INCOMPLETE'
    },
    user:{
        type: Schema.ObjectId,
        ref: 'user',
        required: true
    }    
},{
    versionKey: false
})

export default model('task', taskSchema)