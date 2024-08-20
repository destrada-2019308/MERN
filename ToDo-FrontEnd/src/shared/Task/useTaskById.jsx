import React, { useState } from 'react'
import { getTasksById } from '../../services/api'
import toast from 'react-hot-toast'

export const useTaskById = () => {

    const [ tasks, setTasks ] = useState([])

  const getById = async(user) =>{
    const res = await getTasksById(user)
    
    /*console.log(res);
    console.log(res.data.tasks);*/
    if(res.error) return toast.error(res.err.response.data.message || 'Error to getTask')

    setTasks(res.data.tasks)
    return toast.success(res.data.message)

  }   

  
    
  return {
    getById,
    tasks
  }
}
