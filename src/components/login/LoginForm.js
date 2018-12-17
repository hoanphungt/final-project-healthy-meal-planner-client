import React from 'react'
import { Link } from 'react-router-dom'

export const LoginForm = (props) => {
    const { onSubmit, onChange, values } = props

    return (
        <div>
            <h1>LOGIN</h1>
            <form onSubmit={onSubmit}>
                <input className='email' type="box" placeholder="E-Mail" name='email' onChange={onChange} value={values.email}/><br></br>
                <input className='password' type="box" placeholder="Password" name='password' onChange={onChange} value={values.password}/><br></br>
                <button type='submit' className='login-button'>LOG IN</button>
                <div className='user-box'>
                    <p>Forgot your Password?</p>
                    <p>Not an User? <Link to='/signup'>Create an Account</Link></p>
                </div>                
            </form>
        </div>
    )
}

