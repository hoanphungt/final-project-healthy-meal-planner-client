import React from 'react'
import { Link } from 'react-router-dom'

export const LoginForm = (props) => {
    const { onSubmit, onChange, values } = props

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={onSubmit}>
                <input type="box" placeholder="email" name='email' onChange={onChange} value={values.email}/>
                <input type="box" placeholder="password" name='password' onChange={onChange} value={values.password}/>
                <button type='submit'>LOG IN</button>
                <p>FORGOT YOUR PASSWORD?</p>
                <p>NOT A USER? CREATE AN ACCOUNT.</p>
                <p><Link to='/signup'>Signup</Link></p>
            </form>
        </div>
    )
}

