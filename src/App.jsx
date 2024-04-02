import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Demo from "./pages/demo/Demo.jsx";
import React from "react";
import Home from "./pages/home/Home.jsx";
import sampleUsers from "./data/sampleUsers.js";
import NotFound from "./pages/notFound/NotFound.jsx";


function App() {
  const currentUser = /*sampleUsers[0];*/ true;

  const router = createBrowserRouter([
    {
      path: '/',
      element: (currentUser ? <Home /> : <Demo />),
      errorElement: <NotFound />,
    },
  ]);


  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
