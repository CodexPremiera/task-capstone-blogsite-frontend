import React, { createContext, useContext } from 'react';


const UserContext = createContext(undefined);

export const useCurrentUser = () => useContext(UserContext);

export const UserProvider = ({ currentUser, setCurrentUser, children }) => (
  <UserContext.Provider value={{ currentUser, setCurrentUser }}>
    {children}
  </UserContext.Provider>
);
