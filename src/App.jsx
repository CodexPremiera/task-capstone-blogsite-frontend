import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Demo from "./pages/demo/Demo.jsx";
import React, {useState} from "react";
import Home from "./pages/home/Home.jsx";
import sampleUsers from "./data/sampleUsers.js";
import NotFound from "./pages/notFound/NotFound.jsx";
import Profile from "./pages/profile/Profile.jsx";
import {UserProvider} from "./context/UserContext.jsx";


function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const updateUser = (newUser) => {
    setCurrentUser(newUser);
  };

  const router = createBrowserRouter([
    {
      path: '/',
      element: (currentUser ? <Home /> : <Demo />),
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
