// /src/components/pages/Home.js

import NavBar from "../components/NavBar/NavBar"
import NavBar2 from "../components/NavBar2/NavBar2"

// import SearchForm from "../SearchForm/SearchForm";
import { Outlet } from 'react-router-dom';

function Home() {
    return (
      <>
        <header>
          <NavBar />
          <NavBar2 />
        </header>
        <main>
          <h1>Home - Check out some great Books!</h1>
          <Outlet />
        </main>
      </>
    );
  };
  
  export default Home;