import { Router } from "express";
import { login, registerUser, test } from "./user.controller.js";

const api = Router()

api.get('/test', test)
api.post('/registerUser', registerUser)
api.post('/login', login)

export default api