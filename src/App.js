import { useState } from "react";
import Logo from './logo.svg';

const userDetail = () => {
  return {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "admin@test.com",
    "pass": "123456",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
    }
  }
}


// const login = () => {
const login = (e, email, pass) => {
  e.preventDefault();
  
  let auth = false;
  if (
    userDetail().email === email &&
    userDetail().pass === pass
  ) {
    document.title = "Home"

    auth = true
  }

  sessionStorage.setItem("auth", auth);
  return auth
}


function App() {
  document.title = "Login"

  let sessionAuth = false
  
  if (sessionStorage.getItem("auth")) {
    sessionAuth = true
  }

  const [auth, setAuth] = useState(sessionAuth)
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  
  if (auth) {
    return (
      <>
        <h4>Successfully Login</h4>
        <button 
          className="btn btn-primary btn-sm"
          onClick={ () => {
            sessionStorage.removeItem('auth')
            setAuth(false)
          } }
        >
          Logout
        </button>
      </>
    )
  } else {
    return (
        <form className="form-signin">
          <img
            className="mb-4"
            src={ Logo }
            alt=""
            width="150"
            height="150"
            
          />
          <h1 className="h3 mb-3 font-weight-normal"> Please sign in </h1>
          <label htmlFor="inputEmail" className="sr-only">
            Email address
          </label>
          <input
            type="email"
            id="inputEmail"
            className="form-control"
            placeholder="Email address"
            required
            autoFocus
            value={email}
            onChange={ (e) => setEmail(e.target.value) }
          />
          <label htmlFor="inputPassword" className="sr-only">
            Password
          </label>
          <input
            type="password"
            id="inputPassword"
            className="form-control"
            placeholder="Password"
            required
            value={pass}
            onChange={ (e) => setPass(e.target.value) }
          />
          <button
            className="btn btn-lg btn-primary btn-block"
            onClick={
              (e) => login(e, email, pass) ? setAuth(true): alert('Invalid User')
            }
          >Sign in</button>
          <p className="mt-5 mb-3 text-muted"> &copy; 2017 - 2020 </p>
        </form>
    );
  }
}

export default App;
