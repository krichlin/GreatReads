// /pages/ErrorPage.js

import Navbar from "../components/Navbar/Navbar";
import { useRouteError } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <h1>Whoops! Something went wrong!</h1>
      </main>
    </>
  );
}

export default ErrorPage;