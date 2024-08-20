'use strict'
import { hash, compare } from 'bcrypt'

export const encrypt = (password) =>{
    try {
        return hash(password, 10)
    } catch (error) {
        console.error(error)
        return error
    }
}

export const checkPassword = async(password, hash) =>{
    try {
        return await compare(password, hash)
    } catch (error) {
        console.error(error)
        return error
    }
}

export const checkData = async(data, taskId) =>{
    if(taskId){
        const forbiddenFields = ['name','description', 'initDate', 'endDate', 'user']
    }
    for(const field of forbiddenFields){
        if(data[field] !== undefined){
            return false
        }
        
    }
    return true
}