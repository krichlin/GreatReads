import { useState, useEffect } from "react";
import UserCard from "../UserCard";
import NavBar from "../NavBar"

function Friends() {
  const [users, setUsers] = useState([])

  useEffect(() =>{
    fetch("http://localhost:4000/users")
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
        <h1>Here's A List of all your Friends on the site!</h1>
        {userList}
      </main>
    </>
  );
};

export default Friends;