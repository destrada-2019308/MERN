import axios from 'axios'

//Crea la instancia usando axios

const apiClient = axios.create({
    baseURL: 'http://localhost:2659',
    timeout: 2000
})

//Intercepto de solicitudes
//Permite modificar las solicitudes antes de enviarlas al servidor
apiClient.interceptors.request.use(
    //es un callback
    config =>{
        //obtener el localStorage
        const token = localStorage.getItem('token')
        if(token) config.headers.Authorization = token
        return config
    },
    err => Promise.reject(err)
)

export const registerRequest = async(user) =>{
    try {
        return await apiClient.post('/user/registerUser', user)
    } catch (error) {
        return{ error: true, error}
    }
} 

export const loginRequest = async(login) =>{
    try {
        return await apiClient.post('/user/login', login)
    } catch (error) {
        return{ error: true, error}
    }

}

export const getTasks = async() => {
    try {
        return await apiClient.get('/task/getTask')
    } catch (error) {
        return {error: true, error}
    }
}

export const getTasksById = async(user) => {
    try {
        return await apiClient.get(`/task/getTaskById/${user}`)
    } catch (err) {
        return { error: true, err}
    }
}