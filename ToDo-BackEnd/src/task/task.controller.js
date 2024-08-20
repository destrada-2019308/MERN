import Task from './task.model.js'
import User from '../user/user.model.js'

export const test = (req, res) =>{
    return res.send({message: `Test is running`})
}

export const getTask = async(req, res) =>{
    try {
        const task = await Task.find()
        return res.send({task})
    } catch (error) {
        console.error(error);
    }
}

export const addTask = async(req, res) =>{
    try {
        let data = req.body;
        if(!data.user) return res.status(404).send({message: `User not found`})
        
        const user = await User.findOne({_id: data.user})
        console.log(user.name, user.lastname);

        const dataUser = [user.name, user.lastname]
        let task = new Task(data)   
        await task.save()
        return res.send({message: `Task save successfully`, task, dataUser})
    } catch (error) {
        console.error(error);
        return res.status(500).send({message: error.message})
    }
}

export const getTaskById = async(req, res) => {
    try {
        let { id } = req.params;
        
        const tasks = await Task.find({ user: id})
        if(!tasks) return res.status(404).send({ message: 'user not found '})
            
        return res.send({ tasks })
        
    } catch (err) {
        console.error(err);
        return res.status(500).send({message: err.message})
    }
}