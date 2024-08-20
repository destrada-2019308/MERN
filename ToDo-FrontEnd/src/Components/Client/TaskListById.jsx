import React, { useEffect } from 'react'
import { useTaskById } from '../../shared/Task/useTaskById'

export const TaskListById = () => {

    const { getById, tasks } = useTaskById()

    const user = localStorage.getItem('user')
    const uid = JSON.parse(user).uid
    //console.log(uid);

    //console.log(tasks);

    useEffect(() => {
        getById(uid)
    }, [uid])

    return (
        <div>
            <h1>TaskListById</h1>
            <table>
                <tbody>
                    {tasks.map(index => (
                        <tr key={index._id}>
                            <td >{index.name}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
