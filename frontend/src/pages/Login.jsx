import React, { useState } from 'react';
import {TfiEmail} from 'react-icons/tfi'
import {RiLockPasswordFill} from 'react-icons/ri'
import {useNavigate} from 'react-router-dom'
import './Login.css';
function Login() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        checked: false
    });

    const { email, password, checked } = formData; 
    
    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }));
    }

    const handleLogin = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        
        navigate('/dashboard');
    }
    return (
        <>
        <div className='login-page'>
            <div className='login-left'>
                <div className='login-form'>
                    <h2>Login to your account</h2>
                    <p className='welcome-message'>Welcome back! Please enter your details.</p>
                    <form>
                        <div className='input-group'>
                            <span className='icon-wrapper'>
                                <TfiEmail className='icon'/>
                            </span>
                            <input type="email" placeholder='Email' value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})}/>
                        </div>
                        <div className='input-group'>
                            <span className='icon-wrapper'>
                                <RiLockPasswordFill className='icon'/>
                            </span>
                            <input type="password" placeholder='Password' value={formData.password} onChange={(e) => setFormData({...formData, password: e.target.value})}/>
                        </div>
                        <div className='checkbox'>
                            <label htmlFor='remember'>
                            <input type="checkbox" id='remember' checked={formData.checked} onChange={(e) => setFormData({...formData, checked: e.target.checked})}/>
                            Remember me
                            </label>
                        </div>

                        <div className='forgot-password'>
                            <a href="/forgot-password" className='forgot-link'>Forgot password?</a>
                        </div>
                        <div className='Submition'>
                            <button type='submit' className='login-button' onSubmit={handleLogin}>LOG IN</button>
                        </div>
                    </form>
                    <p className='register-link'>Don't have an account? <strong><a href="/register" className='create-account'>Create an account</a></strong></p>
                </div>
            </div>
            <div className='login-right'>
            </div>
        </div>
        </>
    )
}


export default Login