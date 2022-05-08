import React from 'react'
import './Login.css'
import GoogleLoginButton from '../../components/GoogleLoginButton'
import FacebookLoginButton from '../../components/FacebookLoginButton'

const Login = ({ quickLogin, handleLogin, handleChange, loginInput }) => {

    return (
        <>
            <div className="cotainer-fluid login d-flex align-items-center justify-content-center w-100">
                <div className="container p-2 mx-3 flex-column px-3 py-3">
                    <h3 className='mb-3 mt-2'>Sign In</h3>
                    <input name='email' type="email" placeholder='Any Email Address' onChange={handleChange} value={loginInput.email} />
                    <input name='password' type="password" placeholder='Any Password' onChange={handleChange} value={loginInput.password} />
                    <button id='sign-in' className='mt-2' onClick={handleLogin}>Sign In</button>
                    <div className="or or--x">OR</div>
                    <div className="d-flex align-items-center justify-content-between w-100 login-btn">
                        <GoogleLoginButton quickLogin={quickLogin} />
                        <FacebookLoginButton quickLogin={quickLogin} />
                    </div>
                </div>
            </div>

        </>
    )
}

export default Login