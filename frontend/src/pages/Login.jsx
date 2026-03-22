import React, { useState } from 'react';
import { TfiEmail } from 'react-icons/tfi'
import { RiLockPasswordFill } from 'react-icons/ri'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { login, clearError } from '../features/authSlice'
import './Login.css';

function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const error = useSelector(state => state.auth.error);
    const user = useSelector(state => state.auth.user);

    const [formData, setFormData] = useState({
        email: '',
        password: '',
        checked: false
    });

    if (user) navigate('/dashboard', { replace: true });

    const handleLogin = (e) => {
        e.preventDefault();
        dispatch(login({ username: formData.email, password: formData.password }));
    }

    return (
        <>
        <div className='login-page'>
            <div className='login-left'>
                <div className='login-form'>
                    <h2>Login to your account</h2>
                    <p className='welcome-message'>Welcome back! Please enter your details.</p>
                    <form onSubmit={handleLogin}>
                        <div className='input-group'>
                            <span className='icon-wrapper'>
                                <TfiEmail className='icon'/>
                            </span>
                            <input type="text" placeholder='Email' value={formData.email} onChange={(e) => { dispatch(clearError()); setFormData({...formData, email: e.target.value})}}/>
                        </div>
                        <div className='input-group'>
                            <span className='icon-wrapper'>
                                <RiLockPasswordFill className='icon'/>
                            </span>
                            <input type="password" placeholder='Password' value={formData.password} onChange={(e) => { dispatch(clearError()); setFormData({...formData, password: e.target.value})}}/>
                        </div>
                        {error && <p style={{ color: 'red', fontSize: 13 }}>{error}</p>}
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
                            <button type='submit' className='login-button'>LOG IN</button>
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