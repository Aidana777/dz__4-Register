import React, { useState } from 'react'
import './form.css'
const Form = () => {
    const [data, setData] = useState({
        username: '',
        surname: '',
        mobileNumber: '',
        dateOfBirth: '',
    })
    const { username, surname, mobileNumber, dateOfBirth } = data;
    const changeHandle = e => {
        setData({ ...data, [e.target.name]: [e.target.value] })
    }

    const submitHandle = e => {
        e.preventDefault();
        if (mobileNumber.length <= 12) {
            console.log(data);
            alert(JSON.stringify(data));
        } else {
            console.log('Wrong number');
        }
    }
    return (
        <div className=' container'>
            <h1>Register</h1>
            <form className='form' onSubmit={submitHandle}>
                <input type='text' name='username' placeholder='Username' value={username} onChange={changeHandle} />
                <input type='text' name='surname' placeholder='Surname' value={surname} onChange={changeHandle} />
                <input type='number' name='mobileNumber' value={mobileNumber} onChange={changeHandle} placeholder='MobileNumber' pattern='[0-9]{10}' />
                <input type='date' name='dateOfBirth' placeholder='dateOfBirth' value={dateOfBirth} onChange={changeHandle} />
                <input type='submit' className='btn' name='submit' />
            </form>
        </div>
    )
}

export default Form