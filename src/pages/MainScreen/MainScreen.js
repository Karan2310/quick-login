import React from 'react'
import { GoogleLogout } from 'react-google-login'
import { GOOGLE_CLIENT_ID } from '../../constants'
import './MainScreen.css'

const MainScreen = ({ quickLogout, user }) => {
    const onLogoutSuccess = () => {
        quickLogout();
        alert('Logout Success');
    }
    const { name, email } = user;
    return (
        <>
            <div className="main-screen container-fluid">
                <h3>Hello {name}</h3>
                <h5 className='my-4'>Your are logged-in with email : {email}</h5>
                {/* <GoogleLogout
                    clientId={GOOGLE_CLIENT_ID}
                    buttonText={'Logout'}
                    render={() => (<button className='logout'>Logout</button>)}
                    // onLogoutSuccess={onLogoutSuccess}
                    onClick={onLogoutSuccess}
                /> */}
                <button className='logout' onClick={onLogoutSuccess}>Logout</button>
            </div>
        </>
    )
}

export default MainScreen