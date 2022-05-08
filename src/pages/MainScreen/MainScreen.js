import React from 'react'
import { GoogleLogout } from 'react-google-login'
import { GOOGLE_CLIENT_ID } from '../../constants'

const MainScreen = ({ quickLogout, user }) => {
    const onLogoutSuccess = () => {
        quickLogout();
        alert('Logout Success');
    }
    return (
        <>
            <h3>MainScreen</h3>
            <h5>{user.name}</h5>
            <h5>{user.email}</h5>
            <GoogleLogout
                clientId={GOOGLE_CLIENT_ID}
                buttonText={'Logout'}
                onLogoutSuccess={onLogoutSuccess}
            />
        </>
    )
}

export default MainScreen