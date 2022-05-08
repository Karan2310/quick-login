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
      // setIsLoggedIn(true)
      alert('Login Success, But try using the Google/Facebook Login Button')
    }
  }

  const quickLogin = (name, email) => {
    setIsLoggedIn(true)
    setUser({ "name": name, "email": email })
    // alert(`Welcome ${name}`)
  }

  const quickLogout = () => {
    setIsLoggedIn(false)
  }

  return (
    <div className="App">

      {isLoggedIn ? <MainScreen quickLogout={quickLogout} user={user} /> : <Login handleLogin={handleLogin} handleChange={handleChange} loginInput={loginInput} quickLogin={quickLogin} quickLogout={quickLogout} />}

    </div>
  );
}

export default App;
