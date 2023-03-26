import React, { useState } from 'react'
import './form.css'
const Form = () => {
    const [data, setData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
    })
    const { username, email, password, confirmPassword } = data;
    const changeHandle = e => {
        setData({ ...data, [e.target.name]: [e.target.value] })
    }
    const submitHandle = e => {
        e.preventDefault();
        if (password === confirmPassword) {
            console.log(data);
        } else {
            console.log('passwod is not matching');
        }
    }
    return (
        <div className=' container'>
            <h1>Register</h1>
            <form className='form' onSubmit={submitHandle}>
                <input type='text' name='username' placeholder='Username' value={username} onChange={changeHandle} />
                <input type='email' name='email' placeholder='Email' value={email} onChange={changeHandle} />
                <input type='password' name='password' value={password} onChange={changeHandle} placeholder='Password' />
                <input type='password' name='confirmPassword' placeholder='ConfirmPassword' value={confirmPassword} onChange={changeHandle} />
                <input type='submit' className='btn' name='submit' />
            </form>
        </div>
    )
}

export default Form