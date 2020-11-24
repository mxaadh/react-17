import { useState } from "react";
import Dashboard from "./admin/dashboard";
import Signin from "./auth/signin";
import Logo from './logo.svg';


function App() {
  let sessionAuth = false
  if (sessionStorage.getItem("auth") === 'true') {
    sessionAuth = true
  }

  const [auth, setAuth] = useState(sessionAuth)
  
  if (auth) {
    return (
      <Dashboard
        logo={Logo}
        logout={() => {
          sessionStorage.removeItem('auth')
          setAuth(false)
        }}
      />
    )
  } else {
    return (
      <Signin
        logo={Logo}
        loginAuth={ (check) => check ? setAuth(true): alert('Invalid User') }
      />
    )
  }
}

export default App;
