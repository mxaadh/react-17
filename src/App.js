import { useState } from "react";
import Logo from './logo.svg';

const userDetail = () => {
  return {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "pass": "Pa$$w0rd!",
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
  
  if (
    userDetail().email === email &&
    userDetail().pass === pass
  ) {
    // console.log('Valid');
    // console.log(email, pass);
    return true
  } else {
    // console.log('Invalid');
    return false
  }
}


function App() {
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const [auth, setAuth] = useState(false)
  
  if (auth) {
    return (
      <h4>Successfully Login</h4>
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
