// Login.js

import NavBar from "../components/NavBar/NavBar"

// add functionality here to use a demo account while auth isn't working

function Login() {
    return (
      <>
        <header>
          <NavBar />
        </header>
        <main>
          <h1>Login</h1>
          <form>
            <div>
              <label for="username">Username: </label>
              <input id="username" type="text" name="username" placeholder="Username" />
            </div>
            <br/>
            <div>
              <label for="password">Password: </label>
              <input id="password" type="password" name="password" placeholder="Password" />
            </div>
            <br/>
            <button type="submit">Submit</button>
          </form>
        </main>
      </>
    );
  };
  
  export default Login;