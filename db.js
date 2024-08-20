import mongoose from 'mongoose'

export const connectDB= async() =>{
    try {
       await mongoose.connect('mongodb+srv://destrada:2019308@mern.bcm3xx9.mongodb.net/MERNPrueba1?retryWrites=true&w=majority&appName=Mern')
       console.log('>>> DB is connected');
    } catch (error) {
        console.error(error);
    }
}


