import React from 'react'
import Header from "../../components/header/Header.jsx";
import Content from "../../components/main/Content.jsx";
import {useCurrentUser} from "../../context/UserContext.jsx";

const Home = () => {
  const { currentUser } = useCurrentUser();
  console.log(currentUser);

  return (
    <>
      <Header />
      <main>
        <Content />
      </main>
    </>
  )
}

export default Home;