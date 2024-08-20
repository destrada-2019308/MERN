'use strict'

import { initServer } from "./config/app.js"
import { connectDB } from './config/mong.js'

initServer()
connectDB()