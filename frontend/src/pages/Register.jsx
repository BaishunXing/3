import React, { useState } from 'react';
import './Register.css';
import {FaRegUser} from 'react-icons/fa'
import {TfiEmail} from 'react-icons/tfi'
import {RiLockPasswordFill} from 'react-icons/ri'
function Register() {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        checked: false
    });

    const { username, email, password, confirmPassword, checked } = formData;

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }));
    }

    const onSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
    }

    return (
        <>
        <div className='register-page'>
            <div className='register-left'>
                <h2>Create your account</h2>
                <p className='welcome-message'>Unlock all Features!</p>
                <form className='register-form' onSubmit={onSubmit}>
                    <div className='input-group'>
                        <FaRegUser className='icon'/>
                        <input type="text" placeholder='Username' value={username} onChange={(e) => setFormData({...formData, username: e.target.value})} />
                    </div>
                    <div className='input-group'>
                        <TfiEmail className='icon'/>
                        <input type="email" placeholder='Email' value={email} onChange={(e) => setFormData({...formData, email: e.target.value})} />
                    </div>
                    <div className='input-group'>
                        <RiLockPasswordFill className='icon'/>
                        <input type="password" placeholder='Password' value={password} onChange={(e) => setFormData({...formData, password: e.target.value})} />
                    </div>
                    <div className='input-group'>
                        <RiLockPasswordFill className='icon'/>
                        <input type="password" placeholder='Confirm Password' value={confirmPassword} onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})} />
                    </div>

                    <div className='checkbox'>
                        <label htmlFor='terms'>
                            <input type="checkbox" id='terms' />
                            Accept<a href="/terms" className='terms-link'>Terms and Conditions</a>
                        </label>
                    </div>
                    <div className='Submition'>
                        <button type='submit' className='register-btn'>Register</button>
                    </div>
                </form>
            </div>

            <div className='register-right'>
            </div>
        </div>
        </>
    )
}

export default Register