import { Router } from "express";
import { addTask, getTask, getTaskById, test } from './task.controller.js'
import { validateJwt, isClient, isAdmin  } from '../middlewares/validate_Jwt.js'

const api = Router()

api.get('/test', test)
api.post('/addTask', validateJwt, addTask)
api.get('/getTask', [validateJwt, isAdmin ],getTask)
api.get('/getTaskById/:id', validateJwt, getTaskById)

export default api;