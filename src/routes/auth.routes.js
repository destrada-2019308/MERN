import { Router } from "express";
import {login, logout, profile, register } from '../controllers/auth.controller.js'
import { validateJwt } from "../middlewares/validate_Jwt.js";

const api = Router()

api.post('/register', register)
api.post('/login', login)
api.post('/logout', logout)
api.get('/profile', validateJwt, profile)

export default api;