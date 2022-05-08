import React from 'react'
import { GOOGLE_CLIENT_ID } from '../constants'
import GoogleLogin from 'react-google-login'

const GoogleLoginButton = ({ quickLogin }) => {
    const onSuccess = (res) => {
        // console.log(res);
        const name = res.Lu.iY;
        const email = res.Lu.Bv;
        quickLogin(name, email);
    }

    const onFailure = () => {
        alert('Google Login Failed');
    }

    return (
        <>
            <GoogleLogin
                clientId={GOOGLE_CLIENT_ID}
                render={renderProps => (
                    <button onClick={renderProps.onClick} disabled={renderProps.disabled}>
                        <img className='img-fluid' width={"20px"} src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1024px-Google_%22G%22_Logo.svg.png" alt="google" /> Google</button>
                )}
                buttonText="Login"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
            />
        </>
    )
}

export default GoogleLoginButton