import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Demo from "./pages/demo/Demo.jsx";
import React from "react";
import Home from "./pages/home/Home.jsx";
import sampleUsers from "./data/sampleUsers.js";
import NotFound from "./pages/notFound/NotFound.jsx";
import Profile from "./pages/profile/Profile.jsx";


function App() {
  const currentUser = sampleUsers[-1];

  const router = createBrowserRouter([
    {
      path: '/',
      element: (currentUser ? <Home /> : <Demo />),
      errorElement: <NotFound />,
    },
    {
      path: '/profile/:profileId',
      element: <Profile />,
    },
    {
      path: '*',
      element: <NotFound />,
    },
  ]);


  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
