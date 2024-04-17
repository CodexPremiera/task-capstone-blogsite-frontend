import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Demo from "./pages/demo/Demo.jsx";
import React, {useEffect, useState} from "react";
import Home from "./pages/home/Home.jsx";
import NotFound from "./pages/notFound/NotFound.jsx";
import Profile from "./pages/profile/Profile.jsx";
import {UserProvider} from "./context/UserContext.jsx";


function App() {
  // Retrieve current user from local storage on component mount
  useEffect(() => {
    const storedUser = window.localStorage.getItem("currentUser");
    if (storedUser) {
      setCurrentUser(JSON.parse(storedUser));
    }
  }, []);

  const [currentUser, setCurrentUser] = useState(null);

  const router = createBrowserRouter([
    {
      path: '/',
      element: ((currentUser === null) ? <Demo /> : <Home />),
      errorElement: <NotFound />,
    },
    {
      path: '/profile/:profileId',
      element: <Profile />,
      errorElement: <NotFound />,
    },
    {
      path: '*',
      element: <NotFound />,
    },
  ]);


  return (
    <>
      <UserProvider currentUser={currentUser} setCurrentUser={setCurrentUser} >
        <RouterProvider router={router} />
      </UserProvider>
    </>
  )
}

export default App
