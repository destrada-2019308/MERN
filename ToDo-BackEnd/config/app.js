'use strict'

import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import helmet from 'helmet'
import { config } from 'dotenv'

import userRoutes from '../src/user/user.routes.js'
import taskRoutes from '../src/task/task.routes.js'

const app = express()
config()
const port = process.env.PORT || 3056

app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(cors())
app.use(helmet())
app.use(morgan('dev'))

app.use('/user', userRoutes)
app.use('/task', taskRoutes)

export const initServer = ()=>{
    app.listen(port)
    console.log(`Server HTTP running in port ${port}`)
}