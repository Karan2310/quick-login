import { useState } from 'react';
import './App.css';
import Login from './pages/Login/Login';
import MainScreen from './pages/MainScreen/MainScreen';

function App() {
  const initialLoginState = { email: "", password: "" }
  const [loginInput, setLoginInput] = useState(initialLoginState);
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [user, setUser] = useState([])

  const handleChange = (e) => {
    setLoginInput({ ...loginInput, [e.target.name]: e.target.value });
  }

  const handleLogin = (e) => {
    e.preventDefault();
    if (loginInput.email.trim() === "" || loginInput.password.trim() === "") {
      alert("Please fill all the fields");
      setLoginInput(initialLoginState)
    }
    else {
      alert(JSON.stringify(loginInput));
      setLoginInput(initialLoginState)
      setIsLoggedIn(true)
    }
  }

  const quickLogin = (name, email) => {
    setIsLoggedIn(true)
    setUser({ "name": name, "email": email })
    console.log(user);
    alert(`Welcome ${name}`)
  }

  const quickLogout = () => {
    setIsLoggedIn(false)
  }



  const FacebookLogin = () => {
    alert('Facebook Login');
  }

  return (
    <div className="App">

      {isLoggedIn ? <MainScreen quickLogout={quickLogout} user={user} /> : <Login FacebookLogin={FacebookLogin} handleLogin={handleLogin} handleChange={handleChange} loginInput={loginInput} quickLogin={quickLogin} quickLogout={quickLogout} />}

    </div>
  );
}

export default App;
