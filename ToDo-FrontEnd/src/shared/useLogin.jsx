import { useState } from "react"
import { loginRequest } from "../services/api";
import toast from "react-hot-toast";
import { useNavigate } from 'react-router-dom'

export const useLogin = () => {
    const [ loading, setLoading ] = useState(false)
    const navigate = useNavigate()

  const logged = async(user) =>{
    setLoading(true)

    const res = await loginRequest(user)
    setLoading(false)
    
    if(res.error){
        return toast.error(res.error.response.data.message || 'Error al loggearse')
    }

    //console.log(res.data.loggedUser);

    localStorage.setItem('token', res.data.token)
    localStorage.setItem('user', JSON.stringify(res.data.loggedUser))

    navigate('/home/td/')

    return toast.success('Login successfully')
    
  }

  return {
    logged,
    loading
  }
}
