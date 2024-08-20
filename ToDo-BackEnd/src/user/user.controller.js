import User from './user.model.js'
import { generateJwt } from '../utils/jwt.js'
import { encrypt, checkPassword } from '../utils/validator.js'

export const test = (req, res) =>{
    return res.send('Test is running')
}

export const registerUser = async(req, res) =>{
    try {
        const data = req.body;
        let findUser = await User.findOne({
            $or: [
                {username: data.username},
                {email: data.email}
            ]
        })
        if(findUser) return res.status(403).send({message: `The user with username:${data.username} or email ${data.email} alredy exists `})
        data.password = await encrypt(data.password)
        data.role = 'CLIENT'
        let user = new User(data)
        await user.save()
        return res.send({message: `User register successfully`,user})
    } catch (error) {
        console.error(error);
        return res.status(500).send({message: error.message})
    }
}

export const login = async(req, res) =>{
    try {
        const { account, password } = req.body

        let user = await User.findOne({
            $or: [
                {username: account},
                {email: account}
            ]
        })
        if(!user) return res.status(404).send({message: `The user with account: ${account} doesn't exists   `})
        if(user && await checkPassword(password, user.password)){
            let loggedUser = {
                uid : user._id,
                username : user.username,
                name: user.name,
                role: user.role
            }
            let token = await generateJwt(loggedUser)
            return res.send({message: `Hello ${loggedUser.name}`, loggedUser, token})
        }
        return res.status(404).send({ message: 'Invalid credentials '})
    } catch (error) {
        return res.status(500).send({message: error.message})
    }
}

//Crear el update y el eliminar 
//Usuario por defecto