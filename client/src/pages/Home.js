// /src/components/pages/Home.js

// import NavBar from "../components/NavBar/NavBar"
import Navbar from "../components/Navbar/Navbar"
import Header from "../components/Header/Header"

// import SearchForm from "../SearchForm/SearchForm";
import { Outlet } from 'react-router-dom';

function Home() {
  return (
    <main>
      {/* <Navbar /> */}
      <Header />
      HOME
    </main>
  );
};

// function Home() {
//     return (
//       <>
//         <header>
//           <Header />
//         </header>
//         <main>
//           <h1>Home - Check out some great Books!</h1>
//           <Outlet />
//         </main>
//       </>
//     );
//   };
  
  export default Home;