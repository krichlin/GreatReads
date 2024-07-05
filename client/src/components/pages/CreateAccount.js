// src/components/pages/CreateAccount.js



import NavBar from "../NavBar"

function CreateAccount() {
    return (
      <>
        <header>
          <NavBar />
        </header>
        <main>
          <h1>Create a New Account</h1>
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
            <div>
              <label for="password">Email: </label>
              <input id="email" type="email" name="email" placeholder="email@domain.ext" />
            </div>
            <br/>
            <button type="submit">Submit</button>
          </form>
        </main>
      </>
    );
  };
  
  export default CreateAccount;