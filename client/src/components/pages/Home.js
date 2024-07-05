import { useState, useEffect } from "react";
import UserCard from "../UserCard";
import NavBar from "../NavBar"

function Home() {
  const [users, setUsers] = useState([])

  useEffect(() =>{
    fetch("http://localhost:3000/users")
      .then(r => r.json())
      .then(data => setUsers(data))
      .catch(error => console.error(error));
  }, []);
  
  const userList = users.map(user =>{
    return <UserCard key={user.id} user={user}/>
  });

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Home!</h1>
        {userList}
      </main>
    </>
  );
};

export default Home;