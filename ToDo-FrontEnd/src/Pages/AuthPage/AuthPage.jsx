import React, { useState } from 'react'
import { useLogin } from '../../shared/useLogin'
import { useRegister } from '../../shared/useRegister'
import './auth.css'

export const AuthPage = () => {

    const { logged, loading } = useLogin()
    const { register } = useRegister()
    const [ state, setState ] = useState(false)
    const [ formReg, setFormReg ] = useState({
        name: '',
        username:'',
        password: '',
        email: '',
        phone: '',
        imagesUser: []
    })

    const [ form, setForm ] = useState({
        account: '',
        password: ''
    })

    const handleAuthChange = () =>{
        setState(!state)
    }

    const handleOnSubmint = (e) =>{
        e.preventDefault()
        logged(form)
    }

    const handleOnSubmintRegister = (e) =>{
        e.preventDefault()
    }

    return (
        <>

            <div className='div-auth'>
                <div className='div-h2'>
                    <h2>Welcome to PocketTracker</h2>
                </div>
                <div className={`cont ${state ? 'right-panel-active' : ''}`} id="container">
                    {
                        state ? (
                            <div>
                                <div className="form-container sign-up-container">
                                    <form action="#" onSubmit={handleOnSubmintRegister}>
                                        <h1>Create Account</h1>
                                        <span>or use your email for registration</span>
                                        <input type="text" placeholder='Name' required className='form-input-si' value={formReg.name} onChange={e => setFormReg({ ...formReg, name: e.target.value })} />
                                        <input type="text" placeholder='Username' required className='form-input-si' value={formReg.username} onChange={e => setFormReg({ ...formReg, username: e.target.value })} />
                                        <input type="password" placeholder='Password' required className='form-input-si' value={formReg.password} onChange={e => setFormReg({ ...formReg, password: e.target.value })} />
                                        <input type="email" placeholder='email' required className='form-input-si' value={formReg.email} onChange={e => setFormReg({ ...formReg, email: e.target.value })} />
                                        <input type="number" placeholder='phone' step='any' min='0' required className='form-input-si' value={formReg.phone} onChange={e => setFormReg({ ...formReg, phone: e.target.value })} />
                                        {/*<input type="file" placeholder='Image' id='imagesUser' name='imagesUser' multiple accept='image/' className='form-input-si' onChange={handleImageChange} /> */}
                                        <button>Sign Up</button>
                                    </form>
                                </div>
                                <div className="overlay-container">
                                    <div className="overlay">
                                        <div className="overlay-panel overlay-left">
                                            <h1>Welcome Back!</h1>
                                            <p>To keep connected with us please login with your personal info</p>
                                            <button className="ghost" id="signIn" onClick={handleAuthChange}>Sign In</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div>
                                <div className="form-container sign-in-container">
                                    <form action="#" onSubmit={handleOnSubmint}>
                                        <h1>Sign in</h1>
                                        <div className="social-container">
                                            <a href="#" className="social"></a>
                                            <a href="#" className="social"></a>
                                            <a href="#" className="social"></a>
                                        </div>
                                        <span>or use your account</span>
                                        <input type="text" placeholder="Email" required className='form-input' value={form.account} onChange={e => setForm({ ...form, account: e.target.value })} />
                                        <input type="password" placeholder="Password" required className='form-input' value={form.password} onChange={e => setForm({ ...form, password: e.target.value })} />
                                        <a href="#" className='div-a'>Forgot your password?</a>
                                        <button>Sign In</button>
                                    </form>
                                </div>
                                <div className="overlay-container">
                                    <div className="overlay">
                                        <div className="overlay-panel overlay-right">
                                            <h1>Hello, Friend!</h1>
                                            <p>Enter your personal details and start journey with us</p>
                                            <button className="ghost" id="signUp" onClick={handleAuthChange}>Sign Up</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>

        </>
    )
}

