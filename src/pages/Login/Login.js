import React from 'react'
import './Login.css'
import GoogleLoginButton from '../../components/GoogleLoginButton'

const Login = ({ quickLogin, FacebookLogin, handleLogin, handleChange, loginInput }) => {

    return (
        <>
            <div className="cotainer-fluid login d-flex align-items-center justify-content-center w-100">
                <div className="container p-2 mx-3 flex-column px-3 py-3">
                    <h3 className='mb-3 mt-2'>Sign In</h3>
                    <input name='email' type="email" placeholder='Email Address' onChange={handleChange} value={loginInput.email} />
                    <input name='password' type="password" placeholder='Password' onChange={handleChange} value={loginInput.password} />
                    <button id='sign-in' className='mt-2' onClick={handleLogin}>Sign In</button>
                    <div className="or or--x">OR</div>
                    <div className="d-flex align-items-center justify-content-between w-100 login-btn">
                        <GoogleLoginButton quickLogin={quickLogin} />
                        <button onClick={FacebookLogin}> <img className='img-fluid' width={"20px"} src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/800px-2021_Facebook_icon.svg.png" alt="" /> Facebook</button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Login