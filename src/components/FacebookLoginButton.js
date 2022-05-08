import React from 'react'
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'

const FacebookLoginButton = ({ quickLogin }) => {

    const responseFacebook = (response) => {
        console.log(response);
        const name = response.name;
        const email = response.email;
        quickLogin(name, email);
    }

    const componentClicked = (data) => {
        console.warn(data);
    }

    return (
        // <button> <img className='img-fluid' width={"20px"} src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/800px-2021_Facebook_icon.svg.png" alt="" /> Facebook</button>

        <FacebookLogin
            appId="325831639600242"
            // autoLoad={true}
            fields="name,email,picture"
            onClick={componentClicked}
            callback={responseFacebook}
            render={renderProps => (
                <button onClick={renderProps.onClick}> <img className='img-fluid' width={"20px"} src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/800px-2021_Facebook_icon.svg.png" alt="" /> Facebook</button>
            )} />

    )
}

export default FacebookLoginButton