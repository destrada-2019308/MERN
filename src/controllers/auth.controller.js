import User from '../models/user.model.js'
import bcrypt from 'bcrypt'
import { createToken } from '../utils/jwt.js';

export const register = async(req, res) =>{
    try {
        const {username, email, password} = req.body;

        const passwordHash = await bcrypt.hash(password, 10)

        const newUser = new User ({
            username,
            email,
            password: passwordHash
        })
        await newUser.save()
        //console.log(newUser);
        res.send(newUser)
    } catch (error) {
        console.error(error)
    }
}

export const login = async(req, res) => {
    try {
        const { username, password} = req.body
        
        const userFound = await User.findOne({ username })
        console.log(userFound);
        if(!userFound) return res.status(400).send({ message: 'user not found'})

        
        const passwordCompare = await bcrypt.compare(password, userFound.password)
        if(!passwordCompare) return res.status(404).send({message: 'Invalid credential'})
            
        const token = await createToken({id: userFound._id})
        res.cookie("token", token)
        res.send({id: userFound._id, username: userFound.username, email: userFound.email, token})

    } catch (error) {
        res.status(500).send({message: error.message})
    }
}

export const logout = (req, res) =>{
    res.cookie('token', "", { expires: new Date(0)})
    return res.sendStatus(200)
}

export const profile = (req, res) =>{
    
}