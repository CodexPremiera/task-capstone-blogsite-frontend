import React from 'react';
import Header from "../../components/header/Header.jsx";
import ProfileContent from "./main/ProfileContent.jsx";

function Profile() {
  return (
    <>
      <Header />
      <main>
        <ProfileContent />
      </main>
    </>
  );
}

export default Profile;