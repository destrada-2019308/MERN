import express from "express";
import morgan from "morgan";
import cors from "cors"

import authRoutes from './src/routes/auth.routes.js'
import helmet from "helmet";

const app = express()

//morgan es para una info mas detallada en los request 
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cors())
app.use(helmet())

app.use('/user', authRoutes)

export default app