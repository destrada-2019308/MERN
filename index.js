import app from './app.js'
import { connectDB } from './db.js'

connectDB()
app.listen(2658);
console.log(`server running in port`, 2658);
