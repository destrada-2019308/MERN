import React, { useEffect, useState } from 'react'
import { getTasks } from '../../services/api.js'
import toast from 'react-hot-toast'
import { Loading } from '../Loading'

export const TaskList = () => {
  const [ tasks, setTasks ] = useState([])

  const get = async() => {
    const res = await getTasks()
    console.log(res);
    if(res.error) return toast.error(res.error.response.data.message)

    setTasks(res.data.task)
    console.log(res.data.task);
    return toast.success('getSuccesfully')
  }
    useEffect(() => {
      get()
    }, [])

  return (
    <div >
        <h1>Tasks</h1>
        <table>
          <tbody>
            {tasks.map((task) =>(
              <tr key={task._id} > 
                <td >{task.name}</td>
                <td>{task.description}</td>
               {/* <td>{task.initDate}</td>
                <td>{task.endDate}</td>*/}
                <td>{task.status}</td>
                <td>{task.user.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
    </div>
  )
}
